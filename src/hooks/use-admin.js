import {useAxios} from "./use-axios";

import {  useMutation, useQuery } from "react-query";
import {useAppDispatch} from "../store";
import {setAdminInfo} from "../store/auth";
/**
 * 用户登录
 */
export const useAdminLogin = () => {
    const request = useAxios();

    return useMutation((data) => {
          return request("/v1/admin/login", {
              method: "POST",
              data
          })
        }
    );
};

/**
 * 用户信息
 */
export const useAuth = () => {
    const request = useAxios();
    const dispatch = useAppDispatch();

    const res = useQuery([],() => request("/v1/admin/auth"))

    if(res?.data?.id) {
        dispatch(setAdminInfo(res.data))
    }

    return res
}
