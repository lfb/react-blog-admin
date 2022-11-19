import React, { useState } from 'react'

import { Form, Select } from 'antd'
import { useNavigate } from 'react-router'
import { articleFormItemMap as formItemMap } from '../../../utils/form-search'

import { useDocumentTitle } from '../../../hooks/useDocumentTitle'
import { useArticlesList } from '../../../request/api/articles'
import FormSearch from '../../Common/FormSearch/FormSearch'
import ArticleTable from './Table'
import { useCategory } from '../../../request/api/category'

export default function ArticlesList() {
  useDocumentTitle('文章列表')
  const navigate = useNavigate()

  // 请求文章数据
  const [params, setParams] = useState({})
  const { data: { data: categoryList = [] } = {} } = useCategory()
  const { data: { data: article = [], meta: pagination = {} } = {}, isLoading } = useArticlesList(params)

  // 搜索 - 分类
  const onCategoryChange = cid => {
    setParams({
      ...params,
      category_id: cid
    })
  }

  const onAdd = () => navigate('/article/create')

  return (
    <div>
      <FormSearch formItemMap={formItemMap} params={params} setParams={setParams} onAdd={onAdd}>
        <Form.Item name="field-article-category" style={{ width: '8rem' }}>
          <Select placeholder="分类" onChange={onCategoryChange} allowClear>
            {categoryList.map(category => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </FormSearch>
      <ArticleTable
        isLoading={isLoading}
        article={article}
        pagination={pagination}
        params={params}
        setParams={setParams}
      />
    </div>
  )
}
