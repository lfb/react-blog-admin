import { createSlice } from '@reduxjs/toolkit'
import { adminLogin, getAdminister } from '../context/AuthProvider'
import { removeToken } from '../utils/token'

const initialState = {
  admin: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdmin(state, action) {
      state.admin = action.payload
    }
  }
})

const { setAdmin } = authSlice.actions

export const selectAdmin = state => state.auth.admin

export const administer = () => dispatch => getAdminister().then(admin => dispatch(setAdmin(admin)))
export const login = data => dispatch => adminLogin(data).then(() => dispatch(administer()))
export const logout = () => dispatch => removeToken().then(() => dispatch(setAdmin(null)))
