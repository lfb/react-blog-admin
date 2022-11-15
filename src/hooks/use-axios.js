import { useCallback } from 'react'
import { postRequest } from '../request'
import { useAdminInfo } from './use-admin'

export const useAxios = () => {
  const { admin } = useAdminInfo()
  console.log('admin', admin?.id)
  return useCallback(postRequest, [admin?.id])
}
