import axios from 'axios'
import {getToken} from "../utils/token";
import {encodeToken} from "../utils/token";

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
}, error => Promise.reject(error))

request.interceptors.response.use( response => {
    const {data = null, code = 0} = response.data || {}

    if(code === 200) {
        return Promise.resolve(data)
    }

    return Promise.reject(data)

}, error => Promise.reject(error))

export default request
