import axios from 'axios'
import {getToken} from "../utils/token";
import {encodeToken} from "../utils/token";
import {message} from "antd";
import qs from 'qs'

const request = axios.create({
    timeout: 3000,
    baseURL: process.env.REACT_APP_API_URL,
})

request.interceptors.request.use(config => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = encodeToken()
    }

    return config
}, error => {
    return Promise.reject(error)
})

request.interceptors.response.use( response => {
    const HTTP_STATUS = 200
    const {data = null, code = 0, status = HTTP_STATUS} = response.data || {}

    if(status === HTTP_STATUS && code === HTTP_STATUS) {
        return Promise.resolve(data)
    }

    message.error(response.data.msg)

    return Promise.reject(response.data)

}, error => {
    message.error(error.response.data.msg)

    return Promise.reject(error.response.data)
})

export default request
