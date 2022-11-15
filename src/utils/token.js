import { Base64 } from 'js-base64'

const localStorageKey = '__boblog_auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const setToken = token => {
  window.localStorage.setItem(localStorageKey, token || '')

  return token
}

export const removeToken = async () => window.localStorage.removeItem(localStorageKey)

export function encodeToken() {
  const token = getToken()
  const base64 = Base64.encode(`${token}:`)

  return `Basic ${base64}`
}
