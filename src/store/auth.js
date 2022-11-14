import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});

const { setUser } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export const setAdminInfo = user => setUser(user)
//
// export const register = (form) => (dispatch) =>
//     auth.register(form).then((user) => dispatch(setUser(user)));
//
// export const logout = () => (dispatch) =>
//     auth.logout().then(() => dispatch(setUser(null)));
//
// export const bootstrap = () => (dispatch) =>
//     bootstrapUser().then((user) => dispatch(setUser(user)));
