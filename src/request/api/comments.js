import { useQuery } from 'react-query'
import { postRequest } from '../index'

// 获取评论列表
export const useCommentsList = params =>
  useQuery(['commentsList', params], () =>
    postRequest({
      url: '/v1/comment',
      params
    })
  )
