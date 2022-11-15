import { useQueryClient } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'
import * as auth from '../store/auth'

// 用户信息
export const useAdminInfo = () => {
  const dispatch = useDispatch()
  const admin = useSelector(auth.selectAdmin)

  const login = useCallback(data => dispatch(auth.login(data)), [dispatch])

  const queryClient = useQueryClient()
  const logout = useCallback(() => {
    dispatch(auth.logout())
    queryClient.clear()
  }, [dispatch])

  return {
    admin,
    login,
    logout
  }
}
