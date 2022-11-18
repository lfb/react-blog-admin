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

// 更新评论
export const updateComments = ({ id, ...data }) =>
  postRequest({
    url: `/v1/comment/${id}`,
    method: 'PUT',
    data
  })

// 删除评论
export const deleteComments = ({ id, ...data }) =>
  postRequest({
    url: `/v1/comment/${id}`,
    method: 'DELETE',
    data
  })
