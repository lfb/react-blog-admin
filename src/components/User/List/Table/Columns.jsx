import React from 'react'
import { Tag } from 'antd'

export const userColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '名称',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: '用户状态',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <Tag color={status === 1 ? 'green' : 'magenta'} key={status}>
        {status === 1 ? '正常' : '禁用'}
      </Tag>
    )
  }
]
