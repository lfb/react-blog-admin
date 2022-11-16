import React from 'react'
import { Button, Space, Table, Tag } from 'antd'

const { Column } = Table

export default function UserTable(props) {
  const { params, isLoading, pagination, setParams, userList } = props
  // Table 页码切换
  const onTableChange = ({ current }) => {
    setParams({
      ...params,
      page: current
    })
  }

  const onEdit = () => {
    console.log('onEdit')
  }

  return (
    <Table loading={isLoading} rowKey="id" dataSource={userList} pagination={pagination} onChange={onTableChange}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="名称" dataIndex="username" key="username" />
      <Column title="邮箱" dataIndex="email" key="email" />
      <Column
        title="状态"
        dataIndex="status"
        key="status"
        render={status => (
          <Tag color={status === 1 ? 'green' : 'magenta'} key={status}>
            {status === 1 ? '正常' : '隐藏'}
          </Tag>
        )}
      />
      <Column
        title="操作"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <Button type="primary" onClick={() => onEdit(record.id)}>
              编辑
            </Button>
            <Button type="danger">删除</Button>
          </Space>
        )}
      />
    </Table>
  )
}
