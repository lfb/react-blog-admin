import React, { useState } from 'react'
import { Button, message, Modal, Select, Space, Switch, Table } from 'antd'

import { useQueryClient } from 'react-query'
import { replyColumns } from './Columns'
import { deleteReply, updateReply } from '../../../../request/api/reply'

export default function Index(props) {
  const queryClient = useQueryClient()
  const { params, isLoading, replyList, pagination, setParams } = props

  // Table 页码切换
  const onTableChange = ({ current }) => {
    setParams({
      ...params,
      page: current
    })
  }

  const resetReplyList = () => queryClient.invalidateQueries(['replyList'])

  const [currentId, setCurrentId] = useState(false)
  const [selectLoading, setSelectLoading] = useState(false)
  // 切换审核状态
  const onChangeStatus = (status, id) => {
    setCurrentId(id)
    setSelectLoading(true)

    updateReply({
      id,
      status
    })
      .then(() => {
        message.success('更新成功!')
        resetReplyList()
      })
      .finally(() => setSelectLoading(false))
  }

  // 删除操作
  const [currentDelId, setCurrentDelId] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const onDelete = id => {
    Modal.confirm({
      content: '确定删除该回复吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        setCurrentDelId(id)
        setDeleteLoading(true)
        deleteReply({ id })
          .then(res => {
            message.success(res?.msg || '删除成功')
            resetReplyList()
          })
          .finally(() => setDeleteLoading(false))
      },
      onCancel() {
        message.info('取消')
      }
    })
  }

  // 绑定方法，所以抽出来
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
          onChange={status => onChangeStatus(status, record.id)}
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
        <Button type="danger" loading={currentDelId === record.id && deleteLoading} onClick={() => onDelete(record.id)}>
          删除
        </Button>
      </Space>
    )
  }

  const columns = [...replyColumns, columnsActions]

  return (
    <Table
      rowKey="id"
      columns={columns}
      loading={isLoading}
      dataSource={replyList}
      pagination={pagination}
      onChange={onTableChange}
    />
  )
}
