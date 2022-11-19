import React, { useState } from 'react'
import { Button, Select, Form, Input } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons'

import GoodEditor from '../../Common/GoodEditor'
import './ArticleCreate.scss'
import MyUpload from '../../Common/MyUpload'

export default function createArticle() {
  const [params, setParams] = useState({
    img_url: ''
  })

  const onFinish = values => {
    console.log('Success:', values)
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const handleCategoryChange = e => {
    console.log(e)
  }

  const onUploadSuccess = ({image} = {}) => {
    setParams({
      ...params,
      img_url: image
    })
  }

  const sortArray = new Array(100).fill(1).map((v, i) => v + i)

  return (
    <div>
      <h1>创建文章</h1>
      <Form
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
          <Input allowClear placeholder="文章标题" />
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
          <Input allowClear placeholder="文章描述" />
        </Form.Item>

        <Form.Item>
          <Input style={{ width: '32%', marginRight: '2%' }} allowClear placeholder="文章关键字" />
          <Select
            allowClear
            placeholder="文章分类"
            style={{ width: '32%', marginRight: '2%' }}
            onChange={handleCategoryChange}
            options={[
              {
                value: 'jack',
                label: 'Jack'
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe'
              }
            ]}
          />
          <Select allowClear placeholder="文章排序" style={{ width: '32%' }} onChange={handleCategoryChange}>
            {sortArray.map(opt => (
              <Select.Option key={opt} value={opt}>
                {opt}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <MyUpload onUploadSuccess={onUploadSuccess}>
            <div className="article-upload-box">
              {params.img_url ? <img width="150" src={params.img_url} alt={params.title} /> : <CloudUploadOutlined />}
            </div>
          </MyUpload>
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
          <GoodEditor />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
