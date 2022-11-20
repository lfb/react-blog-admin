import { Button, message, Modal, Space, Table } from 'antd'
import React, { useState } from 'react'

import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router'
import { deleteArticle } from '../../../../request/api/articles'

import { articleColumns } from './Columns'

export default function ArticlesList(props) {
  const { isLoading, article, pagination, setParams, params } = props

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  // 编辑调整文章
  const onEdit = id => navigate(`/article/update/${id}`)
  // 预览文章
  const previewArticle = id => window.open(`https://www.boblog.com/article?id=${id}`)
  // 重置文章数据
  const resetArticleList = () => queryClient.invalidateQueries(['articleList'])

  // 删除文章的状态与方法
  const [currentDelId, setCurrentDelId] = useState('')
  const [deleteLoading, setDeleteLoading] = useState(false)
  const onDelete = id => {
    Modal.confirm({
      content: '确定删除该文章吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        setCurrentDelId(id)
        setDeleteLoading(true)
        deleteArticle({ id })
          .then(res => {
            message.success(res?.msg || '删除成功')
            resetArticleList()
          })
          .finally(() => setDeleteLoading(false))
      },
      onCancel() {
        message.info('取消')
      }
    })
  }

  // 切换 页码
  const onTableChange = ({ current: page }) =>
    setParams({
      ...params,
      page
    })

  // 绑定操作
  const columnsActions = {
    title: '操作',
    dataIndex: 'browse',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type="ghost" onClick={() => previewArticle(record.id)}>
          预览
        </Button>
        <Button type="primary" onClick={() => onEdit(record.id)}>
          编辑
        </Button>
        <Button type="danger" loading={currentDelId === record.id && deleteLoading} onClick={() => onDelete(record.id)}>
          删除
        </Button>
      </Space>
    )
  }

  const columns = [...articleColumns, columnsActions]

  return (
    <Table
      rowKey="id"
      columns={columns}
      loading={isLoading}
      dataSource={article}
      pagination={pagination}
      onChange={onTableChange}
    />
  )
}
