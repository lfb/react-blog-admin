import { useQuery } from 'react-query'
import { postRequest } from '../index'

// 获取上传token
export const useUploadToken = (data = {}) =>
  useQuery(['uploadToken', data], () =>
    postRequest({
      url: '/v1/upload/token',
      method: 'POST',
      data
    })
  )
