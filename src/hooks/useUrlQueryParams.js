/**
 * 返回URL中指定键值参数
 */
import { useSearchParams } from 'react-router-dom'
import { useMemo, useState, useEffect } from 'react'
import { cleanObject } from '../utils/tools'

export const useSetUrlSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  return params => {
    const o = cleanObject({
      ...Object.fromEntries(searchParams),
      ...params
    })
    return setSearchParams(o)
  }
}

export const useUrlQueryParams = keys => {
  const [searchParams] = useSearchParams()
  const setSearchParams = useSetUrlSearchParams()

  return [
    useMemo(() => keys.reduce((prev, key) => ({ ...prev, [key]: searchParams.get(key) || '' }), {}), [searchParams]),
    params => setSearchParams(params)
  ]
}

/**
 * 项目列表的搜索参数
 */
export const useArticleSearchParams = params => useMemo(() => params, [params])

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    // 每次value变化设置
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    // 清理上一次定时器
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}
