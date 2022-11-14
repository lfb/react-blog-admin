
import { Base64 } from 'js-base64'

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const setToken = (user) => {
    window.localStorage.setItem(localStorageKey, user.token || "");
};


export function encodeToken() {
    const token = getToken()
    const base64 = Base64.encode(token + ':')

    return 'Basic ' + base64
}
