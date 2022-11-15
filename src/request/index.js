import request from './axios-instance'

const requestGet  = (url, params = {}) => {
    return request.get(url, params)
        .then(res => Promise.resolve(res))
        .catch(err => Promise.reject(err))
}

const requestPost = (url, {data = {}}) => {
    return request.post(url, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
        .then(res => Promise.resolve(res))
        .catch(err => Promise.reject(err))
}

const postRequest = async ({url = '', method = 'GET', ...params} = {}) => {
    switch (method.toUpperCase()) {
        case 'GET':
            return requestGet(url, params);
        case 'POST':
            return requestPost(url, params);
    }
}

export { postRequest }


