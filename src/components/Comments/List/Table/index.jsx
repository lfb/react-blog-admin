import React, { useState } from 'react'
import { Button, message, Space, Select, Table, Modal } from 'antd'

import { useQueryClient } from 'react-query'
import { commentsColumns } from './Columns'
import { deleteComments, updateComments } from '../../../../request/api/comments'

export default function Index(props) {
  const queryClient = useQueryClient()
  const { params, isLoading, commentsList, pagination, setParams } = props

  // Table 页码切换
  const onTableChange = ({ current: page }) =>
    setParams({
      ...params,
      page
    })
  // 重置数据
  const resetCommentsList = () => queryClient.invalidateQueries(['commentsList'])

  const [currentId, setCurrentId] = useState(false)
  const [selectLoading, setSelectLoading] = useState(false)
  const onChangeStatus = (status, id) => {
    setCurrentId(id)
    setSelectLoading(true)

    updateComments({
      id,
      // 1-审核通过，2-审核不通过
      status
    })
      .then(() => {
        resetCommentsList()
        message.success('更新成功!')
      })
      .finally(() => setSelectLoading(false))
  }

  // 删除操作
  const [currentDelId, setCurrentDelId] = useState('')
  const [deleteLoading, setDeleteLoading] = useState(false)
  const onDelete = id => {
    Modal.confirm({
      content: '确定删除该评论吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        setCurrentDelId(id)
        setDeleteLoading(true)
        deleteComments({ id })
          .then(res => {
            message.success(res?.msg || '删除成功')
            resetCommentsList()
          })
          .finally(() => setDeleteLoading(false))
      },
      onCancel() {
        message.info('取消')
      }
    })
  }

  // 表单操作
  const columnsActions = {
    title: '操作',
    dataIndex: 'browse',
    key: 'action',
    fixed: 'right',
    render: (_, record) => (
      <Space size="middle">
        <Select
          defaultValue={record.status}
          style={{ width: 120 }}
          loading={currentId === record.id && selectLoading}
          onChange={value => onChangeStatus(value, record.id)}
          options={[
            {
              value: 0,
              disabled: true,
              label: '待审核'
            },
            {
              value: 1,
              label: '审核通过'
            },
            {
              value: 2,
              label: '审核不通过'
            }
          ]}
        />
        <Button loading={currentDelId === record.id && deleteLoading} type="danger" onClick={() => onDelete(record.id)}>
          删除
        </Button>
      </Space>
    )
  }

  const columns = [...commentsColumns, columnsActions]

  return (
    <Table
      rowKey="id"
      columns={columns}
      loading={isLoading}
      dataSource={commentsList}
      pagination={pagination}
      onChange={onTableChange}
    />
  )
}
