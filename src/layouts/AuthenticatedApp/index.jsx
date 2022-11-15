import { Layout } from 'antd'
import React, { useState } from 'react'

import './AuthenticatedApp.scss'

import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from '../Sidebar'
import MainHeader from '../MainHeader'
import MainContainer from '../MainContainer'

export default function AuthenticatedApp() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Router>
        <Sidebar collapsed={collapsed} />
        <Layout className="site-layout">
          <MainHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          <MainContainer />
        </Layout>
      </Router>
    </Layout>
  )
}
