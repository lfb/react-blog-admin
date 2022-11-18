import React, { useState } from "react";
import { Button, message, Space, Select, Table, Modal } from "antd";

import { useQueryClient } from "react-query";
import { commentsColumns } from './Columns'
import { deleteComments, updateComments } from "../../../../request/api/comments";
import {commonsStatusText } from "../../../../utils/form-search";
import { deleteCategory } from "../../../../request/api/category";

export default function Index(props) {
  const queryClient = useQueryClient()

  const { params, isLoading, commentsList, pagination, setParams } = props
  // Table 页码切换
  const onTableChange = ({ current }) => {
    setParams({
      ...params,
      page: current
    })
  }

  const [currentDelId, setCurrentDelId] = useState('')
  const [deleteLoading, setDeleteLoading] = useState(false)


  const [currentId, setCurrentId] = useState(false)
  const [switchLoading, setSwitchLoading] = useState(false)
  const onChangeStatus = (comment) => {
    const cid = comment.id
    setCurrentId(cid)
    setSwitchLoading(true)

    const newStatus = comment.status ? 1 : 2
    updateComments({
      id: cid,
      // 1-审核通过，2-审核不通过
      status: newStatus
    })
      .then(() => {
        message.success('更新成功!')
      }).finally(() => setSwitchLoading(false))
  }

  const onDelete = (id) => {
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
            // 重新获取
            setParams({
              ...params,
              page: 1
            })
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
          loading={currentId === record.id && switchLoading}
          onChange={() => onChangeStatus(record)}
          options={[
            {
              value: 0,
              label: '待审核',
            },
            {
              value: 1,
              label: '审核通过',
            },
            {
              value: 2,
              label: '审核不通过',
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
