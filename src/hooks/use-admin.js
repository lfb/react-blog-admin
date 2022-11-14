import {useSelector} from "react-redux";
import {  useMutation, useQuery } from "react-query";

import {useAppDispatch} from "../store";
import {selectAdmin, setAdminInfo} from "../store/auth";
import {adminLogin, getAdminAuth} from "../request/api/admin";

// 用户登录
export const useAdminLogin = () => useMutation(adminLogin)

// 用户信息
export const useAdminInfo = () => ({admin: useSelector(selectAdmin)})

/**
 * 用户校验
 */
export const useAuth = () => {
    const dispatch = useAppDispatch();
    const res = useQuery([], getAdminAuth)

    // 储存用户信息
    if(res?.data?.id) {
        dispatch(setAdminInfo(res.data))
    }

    return res
}
