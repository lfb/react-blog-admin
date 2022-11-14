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

export const logout = () => setUser(null)

