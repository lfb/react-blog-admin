import { Button, Space, Table } from 'antd'
import React from 'react'

import { articleColumns } from './Columns'

export default function Index(props) {
  const { isLoading, article, pagination, setParams, params } = props

  // Table 页码切换
  const onTableChange = ({ current: page }) => {
    setParams({
      ...params,
      page
    })
  }

  // 编辑
  const onEdit = () => {
    console.log('onEdit')
  }

  // 绑定方法，所以抽出来
  const columnsActions = {
    title: '操作',
    dataIndex: 'browse',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type="ghost">预览</Button>
        <Button type="primary" onClick={() => onEdit(record.id)}>
          编辑
        </Button>
        <Button type="danger">删除</Button>
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
