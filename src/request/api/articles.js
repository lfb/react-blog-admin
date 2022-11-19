import { useQuery } from 'react-query'
import { postRequest } from '../index'

// 获取文章列表
export const useArticlesList = (params = {}) =>
  useQuery(['articleList', params], () =>
    postRequest({
      url: '/v1/article',
      params
    })
  )
