import {Button, Modal,message} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {Header} from "../Header";
import {Main} from "../Main";
import {Sidebar} from "../Sidebar";

import {useAdminInfo} from "../../hooks/use-admin";

export const AuthenticatedApp = () => {
    const {admin, logout} = useAdminInfo()

    // 退出
    const AdminLogout = () => {
        Modal.confirm({
            title: '你好，确定退出系统吗',
            icon: <ExclamationCircleOutlined />,
            okText: '登出',
            cancelText: '取消',
            content: '确定后需要重新登陆',
            onOk() {
                logout()
                message.success("登出成功!")
            },
            onCancel() {
                message.info("取消")
            },
        });
        }

    return (
        <div>
            欢迎你， { admin && admin.nickname }

            <div>
                <Button onClick={() => AdminLogout() }>
                    退出
                </Button>
            </div>
            <div>
                <Header />
                <Sidebar />
                <Main />
            </div>
        </div>
    )
}
