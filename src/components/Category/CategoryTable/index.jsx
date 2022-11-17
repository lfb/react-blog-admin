import React from 'react'
import { Button, Space, Table } from 'antd'

import { categoryColumns } from './Columns'

export default function Index(props) {
  const { params, isLoading, categoryList, pagination, setParams } = props
  // Table 页码切换
  const onTableChange = ({ current }) => {
    setParams({
      ...params,
      page: current
    })
  }

  const onEdit = () => {
    console.log('onEdit', onEdit)
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

  const columns = [...categoryColumns, columnsActions]

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
