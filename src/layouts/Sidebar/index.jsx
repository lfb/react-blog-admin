import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { navList } from '../../routes'
import './Sidebar.scss'

const { Sider } = Layout
export default function Sidebar(props) {
  // 选择部分
  const initCurrent = window.location.pathname.substring(1).split('/').join('-')
  const [current, setCurrent] = useState(initCurrent)
  const onNav = ({ key }) => setCurrent(key)

  // 展开的导航
  const initKeys = window.location.pathname.split('/')[1] || 'articles'
  const [openKeys, setOpenKeys] = useState([initKeys])
  const onOpenNavChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    const index = navList.findIndex(nav => openKeys.includes(nav.key))

    if (index === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  // 导航map
  const navListMap = navList.map(nav => ({
    key: nav.key,
    label: nav.title,
    children: nav.children.map(ele => ({
      key: ele.key,
      path: ele.path,
      label: <Link to={ele.path}>{ele.sub_title}</Link>
    }))
  }))

  return (
    <div>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <div className="container-logo">
          <img src="https://cdn.boblog.com/logo.png" alt="boblog" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={{
            height: '100%',
            borderRight: 0
          }}
          selectedKeys={[current]}
          defaultOpenKeys={['articles']}
          openKeys={openKeys}
          onOpenChange={onOpenNavChange}
          onClick={onNav}
          items={navListMap}
        />
      </Sider>
    </div>
  )
}
