import request from './axios-instance'
import { cleanObject } from '../utils/tools'

const requestGET = (url, params = {}) =>
  request
    .get(url, params)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err))

const requestDELETE = (url, params = {}) =>
  request
    .delete(url, params)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err))

const requestPOST = (url, { data = {} }) =>
  request
    .post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err))

const requestPUT = (url, { data = {} }) =>
  request
    .put(url, data)
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err))

const postRequest = async ({ url = '', method = 'GET', ...params } = {}) => {
  switch (method.toUpperCase()) {
    case 'POST':
      return requestPOST(url, cleanObject(params))
    case 'PUT':
      return requestPUT(url, cleanObject(params))
    case 'DELETE':
      return requestDELETE(url, cleanObject(params))
    default:
      return requestGET(url, cleanObject(params))
  }
}

export { postRequest }
