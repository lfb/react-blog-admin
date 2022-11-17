import React from 'react'
import { Tag } from 'antd'

export const categoryColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '排序',
    dataIndex: 'sort_order',
    key: 'sort_order'
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <Tag color={status === 1 ? 'green' : 'magenta'} key={status}>
        {status === 1 ? '正常' : '隐藏'}
      </Tag>
    )
  }
]
