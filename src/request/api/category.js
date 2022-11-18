import { useMutation, useQuery } from 'react-query'
import { postRequest } from '../index'

// 获取分类列表
export const useCategory = (params = {}) =>
  useQuery(['categoryList', params], () =>
    postRequest({
      url: '/v1/category',
      method: 'GET',
      params
    })
  )

// 创建分类
export const createCategory = (data = {}) =>
  postRequest({
    url: '/v1/category',
    method: 'POST',
    data
  })

// 删除分类
export const deleteCategory = ({ id, ...params } = {}) =>
  postRequest({
    url: `/v1/category/${id}`,
    method: 'DELETE',
    params
  })

// 更新分类
export const updateCategory = ({ id, ...data }) =>
  postRequest({
    url: `/v1/category/${id}`,
    method: 'PUT',
    data
  })

// 获取分类详情
export const useCategoryDetail = (id = {}) =>
  useQuery(['categoryDetail', id], () =>
    postRequest({
      url: `/v1/category/${id}`
    })
  )
