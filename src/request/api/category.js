import { useQuery } from 'react-query'
import { postRequest } from '../index'

// 获取分类列表
export const useCategory = (params = {}) =>
  useQuery(['categoryList', params], () =>
    postRequest({
      url: '/v1/category',
      method: 'GET',
      params
    })
  )
