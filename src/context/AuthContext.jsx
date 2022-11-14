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
  const {data: user, isIdle, isLoading, isError} = useAuth()
  const dispatch = useAppDispatch();
  dispatch(setAdminInfo(user))

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

  return <div>{children}</div>;
};
