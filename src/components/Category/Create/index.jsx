import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'

import { useNavigate } from 'react-router'
import { createCategory } from '../../../request/api/category'

export default function CategoryCreate() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [confirmLoading, setConfirmLoading] = useState(false)

  const onSubmit = async values => {
    setConfirmLoading(true)
    // 创建分类
    await createCategory(values)
      .then(res => {
        message.success(res.msg || '创建成功')
        navigate('/category/list')
      })
      .finally(() => setConfirmLoading(false))
  }

  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>创建分类</h1>
      <Form
        form={form}
        name="basic"
        style={{ width: '50%' }}
        initialValues={{ sort_order: 1 }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="名称"
          rules={[
            {
              required: true,
              message: '请输入分类名称'
            }
          ]}
        >
          <Input placeholder="请输入分类名称" />
        </Form.Item>

        <Form.Item
          label="排序"
          name="sort_order"
          rules={[
            {
              required: true,
              message: '请输入分类排序'
            }
          ]}
        >
          <Input placeholder="请输入分类排序" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button style={{ marginRight: '12px' }} onClick={() => form.resetFields()}>
            重置
          </Button>
          <Button loading={confirmLoading} type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
