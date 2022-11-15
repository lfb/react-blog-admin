import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { authSlice } from './auth'

export const rootReducer = {
  auth: authSlice.reducer
}

export const store = configureStore({
  reducer: rootReducer
})

export const useAppDispatch = useDispatch
