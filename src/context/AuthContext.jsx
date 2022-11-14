import React from "react";
import {Spin} from 'antd'

import {useAuth} from "../hooks/use-admin";
import './AuthContext.scss'

export const AuthProvider = ({ children }) => {
  // 进入页面前，检验一下是否有权限
  const { isIdle, isLoading, isError} = useAuth()

  if (isIdle || isLoading) {
    return (
        <div className={"AuthContext-wrap"}>
          <Spin size={"large"} />
        </div>
    )
  }

  if (isError) {
    return <div>error...</div>
  }

  // 通过
  return <div>{children}</div>;
};
