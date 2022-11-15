import React from 'react'
import { SmileOutlined } from '@ant-design/icons'
import { useAdminInfo } from '../../hooks/use-admin'

export default function HomeContainer() {
  const { admin } = useAdminInfo()
  return (
    <div>
      <div>
        <SmileOutlined />
      </div>
      <h1> 您好，{admin && admin.nickname}</h1>
      <p>欢迎来到 Bo Blog！</p>
    </div>
  )
}
