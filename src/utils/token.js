
import { Base64 } from 'js-base64'

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const setToken = (token) => {
    window.localStorage.setItem(localStorageKey, token || "");
};

export function encodeToken() {
    const token = getToken()
    const base64 = Base64.encode(token + ':')

    return 'Basic ' + base64
}
