import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Layout } from 'antd'
import QueueAnim from 'rc-queue-anim'
import HomeContainer from '../../components/Home/Container'
import ArticlesList from '../../components/Articles/List'
import ArticlesCreate from '../../components/Articles/Create'

import CategoryList from '../../components/Category/List'
import CategoryCreate from '../../components/Category/Create'
import CategoryUpdate from '../../components/Category/Update'

import CommentsList from '../../components/Comments/List'
import ReplyList from '../../components/Reply/List'
import UserList from '../../components/User/List'

const { Content } = Layout

export default function MainContainer() {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280
      }}
    >
      <QueueAnim type="left">
        <Routes>
          <Route key="Navigate" path="/" element={<Navigate to="/home" replace />} />
          <Route key="HomeContainer" path="/home" element={<HomeContainer />} />
          <Route key="ArticlesList" path="/article/list" element={<ArticlesList />} />
          <Route key="ArticlesCreate" path="/article/create" element={<ArticlesCreate />} />
          <Route key="UserList" path="/user/list" element={<UserList />} />
          <Route key="CategoryList" path="/category/list" element={<CategoryList />} />
          <Route key="CategoryCreate" path="/category/create" element={<CategoryCreate />} />
          <Route key="CategoryUpdate" path="/category/update/:id" element={<CategoryUpdate />} />
          <Route key="CommentsList" path="/comments/list" element={<CommentsList />} />
          <Route key="ReplyList" path="/reply/list" element={<ReplyList />} />
        </Routes>
      </QueueAnim>
    </Content>
  )
}
