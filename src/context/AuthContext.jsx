import React, {useEffect} from "react";
import {message, Spin} from 'antd'

import './AuthContext.scss'
import {useDispatch} from "react-redux";
import {getToken} from "../utils/token";
import {getAdminAuth} from "../request/api/admin";
import {administer} from "../store/auth";
import {useAsync} from "../hooks/use-async";

export const AuthProvider = ({ children }) => {
  // 进入页面前，检验一下是否有权限
  const { isIdle, isLoading, run } = useAsync()
  const dispatch = useDispatch()

  useEffect(() => {
    // checkAuth()
    run(dispatch(administer()))
  }, [])

  if (isIdle || isLoading) {
    return (
        <div className={"AuthContext-wrap"}>
          <Spin  />
        </div>
    )
  }

  // 通过
  return <div>{children}</div>;
};

