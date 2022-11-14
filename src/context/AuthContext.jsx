import React from "react";
import {Spin} from 'antd'

import {selectUser, setAdminInfo} from "../store/auth";

import {useAppDispatch} from '../store/index'
import {  useSelector } from "react-redux";
import {useAuth} from "../hooks/use-admin";
import './AuthContext.scss'

export const useUserInfo = () => {
  const user = useSelector(selectUser);
  return { user }
};

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
