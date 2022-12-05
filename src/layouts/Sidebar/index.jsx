import {
  HomeOutlined,
  FileDoneOutlined,
  UserAddOutlined,
  BranchesOutlined,
  CommentOutlined,
  AlertOutlined
} from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { navList } from '../../routes'
import './Sidebar.scss'

const { Sider } = Layout
export default function Sidebar(props) {
  const location = useLocation()

  // 展开的导航目录
  const initKeys = location.pathname.split('/')[1] || ''
  const [openKeys, setOpenKeys] = useState([initKeys])

  // 获取当前导航路径
  const getCurrentPathname = () => location.pathname.substring(1).split('/').join('-')
  // 展开的导航路由
  const [selectCurrentRoute, setSelectCurrentRoute] = useState(getCurrentPathname())

  // 切换导航目录
  const onOpenNavChange = keys => {
    const latestOpenKey = keys.find(key => !openKeys.includes(key))
    const navIndex = navList.findIndex(({ key }) => openKeys.includes(key))

    if (navIndex === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  useEffect(() => {
    // 监听当前路由，自动高亮导航
    setSelectCurrentRoute(getCurrentPathname())
  }, [location])

  // 导航 map
  const navIconsMap = {
    home: <HomeOutlined />,
    article: <FileDoneOutlined />,
    category: <BranchesOutlined />,
    user: <UserAddOutlined />,
    comments: <CommentOutlined />,
    reply: <AlertOutlined />
  }
  const navListMap = navList.map(nav => ({
    key: nav.key,
    label: nav.key === 'home' ? <Link to="/home">{nav.title}</Link> : nav.title,
    icon: navIconsMap[nav.key],
    children:
      nav && Array.isArray(nav.children) && nav.children.length
        ? nav.children.map(ele => ({
            key: ele.key,
            path: ele.path,
            label: <Link to={ele.path}>{ele.sub_title}</Link>
          }))
        : null
  }))

  return (
    <div>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
        <Link className="container-logo" to="/" />
        <Menu
          theme="dark"
          mode="inline"
          items={navListMap}
          selectedKeys={[selectCurrentRoute]}
          openKeys={openKeys}
          defaultOpenKeys={['articles']}
          onOpenChange={onOpenNavChange}
        />
      </Sider>
    </div>
  )
}
