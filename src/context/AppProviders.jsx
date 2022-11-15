import React from 'react'
import { Provider } from 'react-redux'

import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../store'
import AuthProvider from './AuthContext'

export default function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </Provider>
  )
}
