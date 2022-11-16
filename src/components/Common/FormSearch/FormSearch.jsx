import { Button, Form, Input, Select } from 'antd'
import React, { useCallback } from 'react'
import { debounce } from 'lodash'

import './FormSearch.jsx.scss'

export default function ArticleFormSearch(props) {
  const [form] = Form.useForm()

  const { formItemMap = {} } = props

  // 搜索 - 状态
  const onStatusChange = status => {
    props.setParams({
      ...props.params,
      status: parseInt(status, 10)
    })
  }

  // 搜索 - 关键字
  const onInputChange = useCallback(
    debounce(e => {
      props.setParams({
        ...props.params,
        [e.target.dataset.value_key]: e.target.value
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
        {formItemMap.status && (
          <Form.Item name="field-article-status" style={{ width: '8rem' }}>
            <Select placeholder="状态" onChange={onStatusChange} allowClear>
              <Select.Option value="0">隐藏</Select.Option>
              <Select.Option value="1">正常</Select.Option>
            </Select>
          </Form.Item>
        )}

        {props.children}

        {formItemMap.input && (
          <Form.Item name="field-article-title" style={{ width: '16rem' }}>
            <Input
              type="text"
              allowClear
              data-value_key={formItemMap.input.value_key}
              placeholder={formItemMap.input?.placeholder || '内容'}
              onChange={onInputChange}
            />
          </Form.Item>
        )}

        {formItemMap.button_reset && (
          <Form.Item>
            <Button onClick={resetForm}>{formItemMap.button_reset.name}</Button>
          </Form.Item>
        )}

        {formItemMap.button_add && (
          <Form.Item>
            <Button type="primary">{formItemMap.button_add.name}</Button>
          </Form.Item>
        )}
      </Form>
    </div>
  )
}
