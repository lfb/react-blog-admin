import { postRequest } from '../index'

// 管理员登录
export const postAdminLogin = data =>
  postRequest({
    url: '/v1/admin/login',
    method: 'POST',
    data
  })

// 获取管理员信息
export const getAdminAuth = () =>
  postRequest({
    url: '/v1/admin/auth'
  })
