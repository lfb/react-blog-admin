import {Button} from 'antd'
import {logout} from "../../store/auth";
import {setToken} from "../../utils/token";
import {useAdminInfo} from "../../hooks/use-admin";

export const AuthenticatedApp = () => {
    const {admin} = useAdminInfo()

    // 退出
    const AdminLogout = () => {
        logout()
        setToken()
        window.location.reload()
    }

    return (
        <div>
            欢迎你， { admin && admin.nickname }

            <div>
                <Button onClick={() => AdminLogout() }>
                    退出
                </Button>
            </div>
        </div>
    )
}
