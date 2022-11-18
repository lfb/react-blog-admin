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

// 更新回复
export const updateReply = ({ id, ...data }) =>
  postRequest({
    url: `/v1/reply/${id}`,
    method: 'PUT',
    data
  })

// 删除回复
export const deleteReply = ({ id, ...data }) =>
  postRequest({
    url: `/v1/reply/${id}`,
    method: 'DELETE',
    data
  })
