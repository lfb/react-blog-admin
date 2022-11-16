import { Button, Form, Input, Select } from 'antd'
import React, { useCallback } from 'react'
import { debounce } from 'lodash'

import './CategoryFormSearch.scss'

export default function CategoryFormSearch(props) {
  const [form] = Form.useForm()
  // 搜索 - 状态
  const onStatusChange = status => {
    props.setParams({
      ...props.params,
      status: parseInt(status, 10)
    })
  }

  // 搜索 - 标题关键字
  const onNameChange = useCallback(
    debounce(e => {
      props.setParams({
        ...props.params,
        name: e.target.value
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

        <Form.Item name="field-article-title" style={{ width: '16rem' }}>
          <Input type="text" placeholder="分类标题" onChange={onNameChange} allowClear />
        </Form.Item>

        <Form.Item>
          <Button onClick={resetForm}>重置条件</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary">新增分类</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
