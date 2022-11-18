import React, { useState } from "react";
import { Button, Space, Switch, Table } from "antd";

import { commentsColumns } from './Columns'

export default function Index(props) {
  const { params, isLoading, commentsList, pagination, setParams } = props
  // Table 页码切换
  const onTableChange = ({ current }) => {
    setParams({
      ...params,
      page: current
    })
  }

  const [currentUid, setCurrentUid] = useState(false)
  const [switchLoading, setSwitchLoading] = useState(false)
  const onChangeSwitch = (status, user) => {
    console.log('status', status, user)
  }

  const onEdit = () => {
    console.log('onEdit', onEdit)
  }

  // 绑定方法，所以抽出来
  const columnsActions = {
    title: '操作',
    dataIndex: 'browse',
    key: 'action',
    fixed: 'right',
    render: (_, record) => (
      <Space size="middle">
        <Switch
          checked={!!record.status}
          checkedChildren="审核通过"
          unCheckedChildren={record.status === 0 ? '待审核' : '审核不通过' }
          loading={record.id === currentUid && switchLoading}
          onChange={status => onChangeSwitch(status, record)}
        />
        <Button type="danger">删除</Button>
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
