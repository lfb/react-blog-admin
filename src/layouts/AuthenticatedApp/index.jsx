// eslint-disable-next-line import/no-extraneous-dependencies
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, DownOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu, Dropdown, message, Modal } from 'antd'
import React, { useState } from 'react'

import './AuthenticatedApp.scss'
import { useAdminInfo } from '../../hooks/use-admin'

const { Header, Sider, Content } = Layout
function AuthenticatedApp() {
  const { admin, logout } = useAdminInfo()
  const [collapsed, setCollapsed] = useState(false)
  const items = [{ label: '登出', key: 'logout' }]

  const onHeaderClick = ({ key }) => {
    if (key === 'logout') {
      Modal.confirm({
        title: '你好，确定退出系统吗',
        okText: '登出',
        cancelText: '取消',
        content: '确定后需要重新登陆',
        onOk() {
          logout()
          message.success('登出成功!')
        },
        onCancel() {
          message.info('取消')
        }
      })
    }
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="container-logo">
          <img src="https://cdn.boblog.com/logo.png" alt="boblog" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background header-container"
          style={{
            padding: '0 40px'
          }}
        >
          <div className="header-left">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed)
            })}
          </div>

          <Dropdown className="header-right" menu={{ items, onClick: onHeaderClick }}>
            <div className="header-right-inner">
              您好，{admin ? admin.nickname : '请登录'}
              <DownOutlined style={{ 'margin-left': '10px' }} />
            </div>
          </Dropdown>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}
export default AuthenticatedApp
