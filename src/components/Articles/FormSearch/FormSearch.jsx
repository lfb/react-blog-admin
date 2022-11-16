import { Button, Form, Input, Select } from 'antd'
import React, { useCallback } from 'react'
import { debounce } from 'lodash'
import { useCategory } from '../../../request/api/category'

import './FormSearch.scss'

export default function FromSearch(props) {
  const [form] = Form.useForm()
  // 请求分类数据
  const { data: { data: categoryList = [] } = {} } = useCategory()

  // 搜索 - 状态
  const onStatusChange = status => {
    props.setParams({
      ...props.params,
      status: parseInt(status, 10)
    })
  }
  // 搜索 - 分类
  const onCategoryChange = cid => {
    props.setParams({
      ...props.params,
      category_id: cid
    })
  }

  // 搜索 - 标题关键字
  const onKeywordChange = useCallback(
    debounce(e => {
      props.setParams({
        ...props.params,
        keyword: e.target.value
      })
    }, 500),
    []
  )

  // 重置
  const resetForm = () => {
    props.setParams({})
    form.resetFields()
  }

  return (
    <div>
      <Form className="search-form-wrap" layout="inline" name="basic" form={form}>
        <Form.Item name="field-article-status" style={{ width: '8rem' }}>
          <Select placeholder="状态" onChange={onStatusChange} allowClear>
            <Select.Option value="0">隐藏</Select.Option>
            <Select.Option value="1">正常</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="field-article-category" style={{ width: '8rem' }}>
          <Select placeholder="分类" onChange={onCategoryChange} allowClear>
            {categoryList.map(category => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="field-article-id">
          <Input type="text" placeholder="文章ID" onChange={onKeywordChange} />
        </Form.Item>

        <Form.Item name="field-article-title" style={{ width: '16rem' }}>
          <Input type="text" placeholder="文章标题" onChange={onKeywordChange} />
        </Form.Item>

        <Form.Item>
          <Button onClick={resetForm}>重置搜索条件</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary">新增文章</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
