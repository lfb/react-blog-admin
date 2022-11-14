import {Button} from 'antd'
import {logout} from "../../store/auth";
import {setToken} from "../../utils/token";

export const AuthenticatedApp = (props) => {
    console.log('')
    console.log('props', props)

    // 退出
    const AdminLogout = () => {
        logout()
        setToken()
        window.location.reload()
    }

    return (
        <div>
            AuthenticatedApp

            <div>
                <Button onClick={() => AdminLogout() }>
                    退出
                </Button>
            </div>
        </div>
    )
}
