import './App.css'
import React from 'react'
import AuthenticatedApp from './layouts/AuthenticatedApp'
import UnauthenticatedApp from './layouts/UnauthenticatedApp'
import { useAdminInfo } from './hooks/useAdmin'

function App() {
  const { admin } = useAdminInfo()

  return <div className="App">{admin && admin.id ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
}

export default App
