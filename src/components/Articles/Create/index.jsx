import React, { useState } from 'react'
import { Button, Select, Form, Input, Modal, message } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons'

import GoodEditor from '../../Common/GoodEditor'
import './ArticleCreate.scss'
import MyUpload from '../../Common/MyUpload'
import { useCategory } from '../../../request/api/category'

export default function createArticle() {
  const [formRef] = Form.useForm()

  const { data: { data: categoryList = [] } = {}, isLoading: isCategoryLoading } = useCategory()
  const [params, setParams] = useState({
    title: '',
    description: '',
    keyword: '',
    img_url: ''
  })

  const onFinish = values => {
    console.log('Success:', values, params)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo, params)
  }
  const onUploadSuccess = ({ image } = {}) => {
    setParams({
      ...params,
      img_url: image
    })
  }

  const sortArray = new Array(100).fill(1).map((v, i) => v + i)

  const resetForm = () => {
    Modal.confirm({
      content: '确定重置表单数据吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        formRef?.resetFields()
      },
      onCancel() {
        message.info('取消')
      }
    })
  }

  return (
    <div>
      <Form
        form={formRef}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: '请输入文章标题!'
            }
          ]}
        >
          <Input
            value={params.title}
            onChange={e =>
              setParams({
                ...params,
                title: e.target.value
              })
            }
            allowClear
            placeholder="文章标题"
          />
        </Form.Item>

        <Form.Item
          name="content"
          rules={[
            {
              required: true,
              message: '请输入文章内容!'
            }
          ]}
        >
          <GoodEditor
            onChange={content =>
              setParams({
                ...params,
                content
              })
            }
          />
        </Form.Item>

        <Form.Item>
          <Input
            value={params.keyword}
            onChange={e => {
              setParams({
                ...params,
                keyword: e.target.value
              })
            }}
            style={{ width: '32%', marginRight: '2%' }}
            allowClear
            placeholder="文章关键字"
          />
          <Select
            allowClear
            loading={isCategoryLoading}
            placeholder="文章分类"
            style={{ width: '32%', marginRight: '2%' }}
            onChange={cid =>
              setParams({
                ...params,
                category_id: cid
              })
            }
          >
            {categoryList.map(category => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
          <Select
            allowClear
            placeholder="文章排序"
            style={{ width: '32%' }}
            onChange={num =>
              setParams({
                ...params,
                sort_order: num
              })
            }
          >
            {sortArray.map(opt => (
              <Select.Option key={opt} value={opt}>
                {opt}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: '请输入文章描述!'
            }
          ]}
        >
          <Input.TextArea
            value={params.description}
            onChange={e =>
              setParams({
                ...params,
                description: e.target.value
              })
            }
            allowClear
            placeholder="文章描述"
          />
        </Form.Item>

        <Form.Item name="img_url">
          <MyUpload onUploadSuccess={onUploadSuccess}>
            <div className="article-upload-box">
              {params.img_url ? <img width="150" src={params.img_url} alt={params.title} /> : <CloudUploadOutlined />}
            </div>
          </MyUpload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button style={{ marginRight: '1rem' }} onClick={resetForm}>
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
