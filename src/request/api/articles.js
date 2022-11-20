import { useQuery } from 'react-query'
import { postRequest } from '../index'

// 获取文章列表
export const useArticlesList = (params = {}) =>
  useQuery(['articleList', params], () =>
    postRequest({
      url: '/v1/article',
      params
    })
  )

// 创建文章
export const createArticle = (data = {}) =>
  postRequest({
    url: '/v1/article',
    method: 'POST',
    data
  })

// 删除文章
export const deleteArticle = ({ id, ...data } = {}) =>
  postRequest({
    url: `/v1/article/${id}`,
    method: 'DELETE',
    data
  })

// 更新文章
export const updateArticle = ({ id, ...data } = {}) =>
  postRequest({
    url: `/v1/article/${id}`,
    method: 'PUT',
    data
  })

// 文章详情
export const useArticleDetail = id =>
  useQuery(['articleDetails', id], () =>
    postRequest({
      url: `/v1/article/${id}`
    })
  )
