import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "./login.scss"
import {useAdminLogin} from "../../hooks/use-admin";
import {useAdminInfo} from "../../hooks/use-admin";
import {setToken} from "../../utils/token";

export const Login = () => {
    const {admin} = useAdminInfo()

    const { mutateAsync: postAdminLogin, isLoading } =  useAdminLogin()
    const handleSubmit = async (adminInfo) => {
       const admin = await postAdminLogin(adminInfo)
       if(admin && admin.token) {
           setToken(admin.token)
           window.location.reload()
       }
    };

    return (
        <div className={'login-wrap'}>
            <div className={'logo'}>
                <img src="https://cdn.boblog.com/logo.png" alt="boblog"/>
            </div>
            <div>
                {admin && admin.nickname}
            </div>
            <Form className={'form-wrap'} onFinish={handleSubmit}>
                <Form.Item
                    name={"email"}
                    rules={[{ required: true, message: "请输入邮箱" }]}
                >
                    <Input placeholder={"邮箱"} type="text" id={"email"} />
                </Form.Item>
                <Form.Item
                    name={"password"}
                    rules={[{ required: true, message: "请输入密码" }]}
                >
                    <Input placeholder={"密码"} type="password" id={"password"} />
                </Form.Item>
                <Form.Item>
                    <Button loading={isLoading} block htmlType={"submit"} type={"primary"}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
