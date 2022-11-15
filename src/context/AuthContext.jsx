import React, { useEffect } from 'react'
import { Spin } from 'antd'

import './AuthContext.scss'
import { useDispatch } from 'react-redux'
import { administer } from '../store/auth'
import { useAsync } from '../hooks/useAsync'

export default function AuthProvider({ children }) {
  // 进入页面前，检验一下是否有权限
  const { isIdle, isLoading, run } = useAsync()
  const dispatch = useDispatch()

  useEffect(() => {
    run(dispatch(administer()))
  }, [dispatch, run])

  if (isIdle || isLoading) {
    return (
      <div className="AuthContext-wrap">
        <Spin />
      </div>
    )
  }

  // 通过
  return <div>{children}</div>
}
