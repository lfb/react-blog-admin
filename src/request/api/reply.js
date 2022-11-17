import { useQuery } from 'react-query'
import { postRequest } from '../index'

// 获取回复列表
export const useReplyList = params =>
  useQuery(['replyList', params], () =>
    postRequest({
      url: '/v1/reply',
      params
    })
  )
