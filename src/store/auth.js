import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    admin: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAdmin(state, action) {
            state.admin = action.payload;
        },
    },
});

const { setAdmin } = authSlice.actions;

export const selectAdmin= (state) => state.auth.admin;

export const setAdminInfo = admin => setAdmin(admin)

export const logout = () => setAdmin(null)

