import {useAxios} from "./use-axios";

import {  useMutation, useQuery } from "react-query";

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

export const useAuth = () => {
    const request = useAxios();
    return useQuery([],() => request("/v1/admin/auth")
);
}


// export const bootstrapUser = async () => {
//     let user = null;
//     const token = getToken();
//     if (token) {
//         const data = await http("me", { token });
//         user = data.user;
//     }
//
//     return user;
// };
