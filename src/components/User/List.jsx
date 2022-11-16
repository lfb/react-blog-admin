import React, { useState } from 'react'
import UserTable from './UserTable/UserTable'
import { useUserList } from '../../request/api/user'
import FormSearch from '../Common/FormSearch/FormSearch'
import { userFormItemMap } from '../../utils/form-search'

export default function UserList() {
  const [params, setParams] = useState({})
  const { data: { data: userList = [], meta: pagination = {} } = {}, isLoading } = useUserList(params)

  return (
    <div>
      <FormSearch formItemMap={userFormItemMap} params={params} setParams={setParams} />
      <UserTable userList={userList} isLoading={isLoading} pagination={pagination} params={params} setParams={setParams} />
    </div>
  )
}
