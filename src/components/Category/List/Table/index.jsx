import React, { useState } from 'react'
import { Button, message, Space, Table, Modal } from 'antd'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router'
import { categoryColumns } from './Columns'
import { deleteCategory } from '../../../../request/api/category'

export default function Index(props) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { params, isLoading, categoryList, pagination, setParams } = props

  const onUpdate = id => navigate(`/category/update/${id}`)
  const resetCategoryList = () => queryClient.invalidateQueries(['categoryList'])

  // 删除分类方法
  const [currentDelId, setCurrentDelId] = useState('')
  const [deleteLoading, setDeleteLoading] = useState(false)
  const onDelete = async id => {
    Modal.confirm({
      content: '确定删除该分类吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        setCurrentDelId(id)
        setDeleteLoading(true)
        deleteCategory({ id })
          .then(res => {
            message.success(res?.msg || '删除成功')
            resetCategoryList()
          })
          .finally(() => setDeleteLoading(false))
      },
      onCancel() {
        message.info('取消')
      }
    })
  }

  // 绑定操作
  const columnsActions = {
    title: '操作',
    dataIndex: 'browse',
    key: 'action',
    render: (_, { id }) => (
      <Space size="middle">
        <Button type="primary" onClick={() => onUpdate(id)}>
          更新
        </Button>
        <Button loading={currentDelId === id && deleteLoading} type="danger" onClick={() => onDelete(id)}>
          删除
        </Button>
      </Space>
    )
  }

  const columns = [...categoryColumns, columnsActions]

  // 页码切换
  const onTableChange = ({ current }) =>
    setParams({
      ...params,
      page: current
    })

  return (
    <Table
      rowKey="id"
      columns={columns}
      loading={isLoading}
      dataSource={categoryList}
      pagination={pagination}
      onChange={onTableChange}
    />
  )
}
