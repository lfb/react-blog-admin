import React, {useState} from "react";
import { Button, Form, Input } from "antd";
import "./login.css"

// import { useAuth } from "../../context/AuthContext";
// import { useAsync } from "../../hooks/use-async";
export const Login = () => {
    // const { login } = useAuth();
    // const { run, isLoading } = useAsync(undefined, { throwOnError: true });
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = (userInfo) => {
        // run(login(userInfo)).catch(onError);
    };
    return (
        <div className={'login-wrap'}>
            <div className={'logo'}>
                <img src="https://cdn.boblog.com/logo.png" alt="boblog"/>
            </div>
            <Form className={'form-wrap'} onFinish={handleSubmit}>
                <Form.Item
                    name={"username"}
                    rules={[{ required: true, message: "请输入用户名" }]}
                >
                    <Input placeholder={"用户名"} type="text" id={"username"} />
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
