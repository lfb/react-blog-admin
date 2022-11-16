import { getToken, setToken } from '../utils/token'
import { getAdminAuth, postAdminLogin } from '../request/api/admin'

// 获取用户信息
export const getAdminister = async () => {
  let admin = null
  const token = getToken()
  if (token) {
    admin = await getAdminAuth()
  }
  return admin
}

// 用户登录
export const adminLogin = async data => {
  const admin = await postAdminLogin(data)
  const token = admin && admin.token

  return setToken(token)
}
