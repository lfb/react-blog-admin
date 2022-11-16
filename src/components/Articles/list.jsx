import React, { useCallback, useState } from 'react'
import { debounce } from 'lodash'

import { Space, Table, Button, Form, Input, Select, Tag } from 'antd'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useArticlesList } from '../../request/api/articles'
import { useCategory } from '../../request/api/category'

const { Option } = Select
const { Column } = Table

export default function ArticlesList() {
  useDocumentTitle('文章列表')

  // form 实例
  const [form] = Form.useForm()

  // 请求分类数据
  const { data: { data: categoryList = [] } = {} } = useCategory()

  // 请求文章数据
  const [params, setParams] = useState({})
  const { data: { data: article = [], meta: pagination = {} } = {}, isLoading } = useArticlesList(params)

  // Table 页码切换
  const onTableChange = ({ current }) => {
    setParams({
      ...params,
      page: current
    })
  }

  // 编辑
  const onEdit = () => {
    console.log('onEdit')
  }

  // 搜索 - 状态
  const onStatusChange = status => {
    setParams({
      ...params,
      status: parseInt(status, 10)
    })
  }
  // 搜索 - 分类
  const onCategoryChange = cid => {
    setParams({
      ...params,
      category_id: cid
    })
  }

  // 搜索 - 标题关键字
  const onKeywordChange = useCallback(
    debounce(e => {
      setParams({
        ...params,
        keyword: e.target.value
      })
    }, 500),
    []
  )

  // 重置
  const resetForm = () => {
    setParams({})
    form.resetFields()
  }

  return (
    <div>
      <Form style={{ marginBottom: '2rem' }} layout="inline" name="basic" form={form}>
        <Form.Item name="field-article-status" style={{ width: '10rem' }}>
          <Select placeholder="状态" onChange={onStatusChange} allowClear>
            <Option value="0">隐藏</Option>
            <Option value="1">正常</Option>
          </Select>
        </Form.Item>

        <Form.Item name="field-article-category" style={{ width: '10rem' }}>
          <Select placeholder="分类" onChange={onCategoryChange} allowClear>
            {categoryList.map(category => (
              <Option key={category.id} value={category.id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="field-article-id">
          <Input type="text" placeholder="文章ID" onChange={onKeywordChange} />
        </Form.Item>

        <Form.Item name="field-article-title" style={{ width: '18rem' }}>
          <Input type="text" placeholder="文章标题" onChange={onKeywordChange} />
        </Form.Item>

        <Form.Item>
          <Button onClick={resetForm}>重置搜索条件</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary">新增文章</Button>
        </Form.Item>
      </Form>

      <Table loading={isLoading} rowKey="id" dataSource={article} pagination={pagination} onChange={onTableChange}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="图片" dataIndex="img_url" key="img_url" render={img => <img width="80px" src={img} alt="" />} />
        <Column title="标题" dataIndex="title" key="title" />
        <Column title="分类" dataIndex="category_info" key="category_info" render={category => <div>{category && category.name}</div>} />
        <Column title="作者" dataIndex="admin_info" key="admin_info" render={admin => <div>{admin && admin.nickname}</div>} />
        <Column
          title="状态"
          dataIndex="status"
          key="status"
          render={status => (
            <Tag color={status === 1 ? 'green' : 'magenta'} key={status}>
              {status === 1 ? '正常' : '隐藏'}
            </Tag>
          )}
        />
        <Column title="排序" dataIndex="sort_order" key="sort_order" />
        <Column title="浏览次数" dataIndex="browse" key="browse" />

        <Column
          title="操作"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => onEdit(record.id)}>
                编辑
              </Button>
              <Button type="danger">删除</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  )
}
