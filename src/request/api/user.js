import { useQuery } from 'react-query'
import { postRequest } from '../index'

// 用户列表
export const useUserList = params =>
  useQuery(['userList', params], () =>
    postRequest({
      url: '/v1/user/list',
      params
    })
  )

// 用户列表
export const updateUser = ({ id, ...data }) =>
  postRequest({
    url: `/v1/user/update/${id}`,
    method: 'PUT',
    data
  })
