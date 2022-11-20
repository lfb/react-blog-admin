import { Button, Form, Input, Spin, message, Space } from 'antd'
import React, { useState } from 'react'

import { useNavigate, useParams } from 'react-router'
import { updateCategory, useCategoryDetail } from '../../../request/api/category'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'

export default function CategoryCreate() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { id } = useParams() || {}
  useDocumentTitle(`分类更新 - ${id}`)

  const [isLoading, setIsLoading] = useState(false)
  const { data: category = null } = useCategoryDetail(id)

  // 分类更新
  const onSubmit = async values => {
    setIsLoading(true)
    // 创建分类
    updateCategory({
      id,
      ...values
    })
      .then(() => {
        message.success('更新成功！')
        navigate('/category/list')
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <div>
      {category ? (
        <div>
          <h1 style={{ marginBottom: '2rem' }}>更新分类 </h1>
          <Form
            form={form}
            name="basic"
            style={{ width: '50%' }}
            initialValues={{ name: category.name, sort_order: category.sort_order }}
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
              <Button loading={isLoading} type="primary" htmlType="submit">
                更新
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <Spin />
      )}
    </div>
  )
}
