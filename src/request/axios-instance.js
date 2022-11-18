import axios from 'axios'
import { message } from 'antd'
import { getToken, encodeToken, removeToken } from '../utils/token'

const request = axios.create({
  timeout: 3000,
  baseURL: process.env.REACT_APP_API_URL
})

request.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = encodeToken()
    }

    return config
  },
  error => Promise.reject(error)
)

request.interceptors.response.use(
  response => {
    const HTTP_STATUS = 200
    const { data = null, code = 0, status = HTTP_STATUS } = response.data || {}

    if (status === HTTP_STATUS && code === HTTP_STATUS) {
      return Promise.resolve(data)
    }

    message.error(response.data?.msg || 'error')

    return Promise.reject(response.data)
  },
  error => {
    message.error(error.response?.data?.msg || 'error')
    // 权限不足，移除token，退出登录
    if ([401, 403].includes(error.response.status)) {
      setTimeout(() => {
        removeToken().then(() => {
          window.location.href = '/'
        })
      }, 1000)
    }

    return Promise.reject(error.response.data)
  }
)

export default request
