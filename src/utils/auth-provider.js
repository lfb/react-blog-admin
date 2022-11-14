const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const setToken = (user) => {
    window.localStorage.setItem(localStorageKey, user.token || "");
};
