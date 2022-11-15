import React from 'react'
import { SmileOutlined } from '@ant-design/icons'
import { useAdminInfo } from '../../hooks/useAdmin'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

export default function HomeContainer() {
  useDocumentTitle('首页')

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
