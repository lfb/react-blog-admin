import React, { useState } from 'react'
import UserTable from './UserTable/UserTable'
import { useUserList } from '../../request/api/user'
import UserFormSearch from './UserFormSearch/UserFormSearch'

export default function UserList() {
  const [params, setParams] = useState({})
  const { data: { data: userList = [], meta: pagination = {} } = {}, isLoading } = useUserList(params)

  return (
    <div>
      <UserFormSearch params={params} setParams={setParams} />
      <UserTable userList={userList} isLoading={isLoading} pagination={pagination} params={params} setParams={setParams} />
    </div>
  )
}
