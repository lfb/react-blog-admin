import React, { useState } from 'react'
import { Button, Select, Form, Input, Modal, message, Radio } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'

import GoodEditor from '../../Common/GoodEditor'
import './ArticleCreate.scss'
import MyUpload from '../../Common/MyUpload'
import { useCategory } from '../../../request/api/category'
import { createArticle } from '../../../request/api/articles'
import { useAdminInfo } from '../../../hooks/useAdmin'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'

const sortArray = new Array(100).fill(1).map((v, i) => v + i)

export default function ArticleCreate() {
  useDocumentTitle(`创建文章`)

  const [formRef] = Form.useForm()
  const navigate = useNavigate()
  const { admin } = useAdminInfo()
  const { data: { data: categoryList = [] } = {}, isLoading: isCategoryLoading } = useCategory()

  // 初始化参数
  const initParams = {
    category_id: 0,
    content: '',
    description: '',
    img_url: '',
    seo_keyword: '',
    sort_order: 1,
    status: 1,
    title: '',
    admin_id: admin?.id
  }

  const [isLoading, setIsLoading] = useState(false)
  const [params, setParams] = useState(initParams)

  // 上传图片成功
  const onUploadSuccess = ({ image } = {}) => {
    setParams({
      ...params,
      img_url: image
    })
  }

  // 提交创建文章
  const onSubmit = () => {
    setIsLoading(true)
    createArticle(params)
      .then(res => {
        message.success('创建成功')
        setTimeout(() => {
          navigate('/article/list')
        }, 200)
      })
      .finally(() => setIsLoading(false))
  }

  // 重置表单
  const resetForm = () => {
    Modal.confirm({
      content: '确定重置表单数据吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        formRef.resetFields()
        setParams(initParams)
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
        initialValues={{ status: params.status }}
        name="basic"
        autoComplete="off"
        onFinish={onSubmit}
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

        <Form.Item
          name="content"
          rules={[
            {
              required: true,
              message: '请输入文字内容!'
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

        <section style={{ display: 'flex' }}>
          <Form.Item
            name="seo_keyword"
            style={{ width: '30%', marginRight: '2%' }}
            rules={[
              {
                required: true,
                message: '请输入文章关键字!'
              }
            ]}
          >
            <Input
              value={params.seo_keyword}
              onChange={e => {
                setParams({
                  ...params,
                  seo_keyword: e.target.value
                })
              }}
              allowClear
              placeholder="文章关键字"
            />
          </Form.Item>

          <Form.Item
            name="category"
            style={{ width: '22%', marginRight: '2%' }}
            rules={[
              {
                required: true,
                message: '请选择文章分类!'
              }
            ]}
          >
            <Select
              allowClear
              loading={isCategoryLoading}
              placeholder="文章分类"
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
          </Form.Item>

          <Form.Item
            name="sort_order"
            style={{ width: '22%', marginRight: '2%' }}
            rules={[
              {
                required: true,
                message: '请选择文章排序!'
              }
            ]}
          >
            <Select
              allowClear
              placeholder="文章排序"
              value={params.sort_order}
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

          <Form.Item name="status" label="状态：" style={{ width: '22%' }}>
            <Radio.Group
              value={params.status}
              onChange={e => {
                setParams({
                  ...params,
                  status: e.target.value
                })
              }}
            >
              <Radio value={1}>正常</Radio>
              <Radio value={0}>隐藏</Radio>
            </Radio.Group>
          </Form.Item>
        </section>

        <Form.Item
          rules={[
            {
              required: true,
              message: '请上传文章图片!'
            }
          ]}
        >
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
          <Button loading={isLoading} style={{ marginRight: '1rem' }} onClick={resetForm}>
            重置
          </Button>
          <Button loading={isLoading} type="primary" htmlType="submit">
            立即发布
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
