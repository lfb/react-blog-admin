import { useCallback, useReducer, useState, useEffect, useRef } from 'react'

const defaultConfig = {
  throwOnError: false
}

const defaultInitialState = {
  stat: 'idle',
  data: null,
  error: null
}

export const useMountedRef = () => {
  const mountRef = useRef(false)

  useEffect(() => {
    mountRef.current = true
    return () => {
      mountRef.current = false
    }
  })

  return mountRef
}

const useSafeDispatch = dispatch => {
  const mountedRef = useMountedRef()

  return useCallback((...args) => (mountedRef.current ? dispatch(...args) : () => null), [dispatch, mountedRef])
}

export const useAsync = (initialState, initialConfig) => {
  const config = {
    ...defaultConfig,
    initialConfig
  }
  const [retry, setRetry] = useState(() => () => {})
  const [state, dispatch] = useReducer((state, action) => ({ ...state, ...action }), {
    ...defaultInitialState,
    ...initialState
  })

  const safeDispatch = useSafeDispatch(dispatch)

  const setData = useCallback(
    data =>
      safeDispatch({
        data,
        stat: 'success',
        error: null
      }),
    [safeDispatch]
  )

  const setError = useCallback(
    error =>
      safeDispatch({
        error,
        stat: 'error',
        data: null
      }),
    [safeDispatch]
  )

  const run = useCallback(
    (promise, runConfig) => {
      if (!promise || !promise.then) {
        throw new Error('请传入 Promise 类型数据')
      }

      setRetry(() => () => {
        if (runConfig?.retry) {
          run(runConfig?.retry(), runConfig)
        }
      })
      safeDispatch({ stat: 'loading' })

      return promise
        .then(data => {
          setData(data)

          return data
        })
        .catch(error => {
          setError(error)
          if (config.throwOnError) {
            return Promise.reject(error)
          }
          return error
        })
    },
    [config.throwOnError, setData, setError, safeDispatch]
  )

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isError: state.stat === 'error',
    isSuccess: state.stat === 'success',
    run,
    setData,
    setError,
    retry,
    ...state
  }
}
