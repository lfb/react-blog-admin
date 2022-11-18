import React, { useState } from 'react'
import { Space, Table, Switch, message } from 'antd'
import { useQueryClient } from 'react-query'
import { userColumns } from './Columns'

import { updateUser } from '../../../../request/api/user'

export default function Index(props) {
  const { params, isLoading, pagination, setParams, userList } = props
  // Table 页码切换
  const onTableChange = ({ current }) => {
    setParams({
      ...params,
      page: current
    })
  }

  const queryClient = useQueryClient()

  const [currentUid, setCurrentUid] = useState(false)
  const [switchLoading, setSwitchLoading] = useState(false)

  const onChangeSwitch = (status, user) => {
    setSwitchLoading(true)

    const uid = user.id
    setCurrentUid(uid)

    updateUser({
      ...user,
      status: Number(status)
    })
      .then(() => {
        const previousUsers = queryClient.getQueryData(['userList', params])
        const index = previousUsers.data.findIndex(u => u.id === uid)
        if (index !== -1) {
          const curUser = previousUsers.data[index]
          curUser.status = Number(status)
          previousUsers.data.splice(index, 1, curUser)

          queryClient.setQueryData(['userList', params], () => previousUsers)
        }
        message.success('设置成功！')
      })
      .finally(() => setSwitchLoading(false))
  }

  // 绑定方法，所以抽出来
  const columnsActions = {
    title: '用户状态切换',
    dataIndex: 'browse',
    key: 'action',
    render: (_, record) => (
      <Space>
        <Switch
          checked={!!record.status}
          checkedChildren="正常"
          unCheckedChildren="禁用"
          loading={record.id === currentUid && switchLoading}
          onChange={status => onChangeSwitch(status, record)}
        />
      </Space>
    )
  }

  const columns = [...userColumns, columnsActions]

  return (
    <Table
      rowKey="id"
      columns={columns}
      loading={isLoading}
      dataSource={userList}
      pagination={pagination}
      onChange={onTableChange}
    />
  )
}
