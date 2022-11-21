import React, { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Layout, Spin } from 'antd'

const HomeContainer = lazy(() => import(/* webpackChunkName: "HomeContainer" */ '../../components/Home/Container'))
const ArticlesList = lazy(() => import(/* webpackChunkName: "ArticlesList" */ '../../components/Articles/List'))
const ArticlesCreate = lazy(() => import(/* webpackChunkName: "ArticlesCreate" */ '../../components/Articles/Create'))
const ArticlesUpdate = lazy(() => import(/* webpackChunkName: "ArticlesUpdate" */ '../../components/Articles/Update'))
const CategoryList = lazy(() => import(/* webpackChunkName: "CategoryList" */ '../../components/Category/List'))
const CategoryCreate = lazy(() => import(/* webpackChunkName: "CategoryCreate" */ '../../components/Category/Create'))
const CategoryUpdate = lazy(() => import(/* webpackChunkName: "CategoryUpdate" */ '../../components/Category/Update'))
const CommentsList = lazy(() => import(/* webpackChunkName: "CommentsList" */ '../../components/Comments/List'))
const ReplyList = lazy(() => import(/* webpackChunkName: "ReplyList" */ '../../components/Reply/List'))
const UserList = lazy(() => import(/* webpackChunkName: "UserList" */ '../../components/User/List'))

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
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route key="Navigate" path="/" element={<Navigate to="/home" replace />} />
          <Route key="HomeContainer" path="/home" element={<HomeContainer />} />
          <Route key="ArticlesList" path="/article/list" element={<ArticlesList />} />
          <Route key="ArticlesCreate" path="/article/create" element={<ArticlesCreate />} />
          <Route key="ArticlesUpdate" path="/article/update/:id" element={<ArticlesUpdate />} />
          <Route key="UserList" path="/user/list" element={<UserList />} />
          <Route key="CategoryList" path="/category/list" element={<CategoryList />} />
          <Route key="CategoryCreate" path="/category/create" element={<CategoryCreate />} />
          <Route key="CategoryUpdate" path="/category/update/:id" element={<CategoryUpdate />} />
          <Route key="CommentsList" path="/comments/list" element={<CommentsList />} />
          <Route key="ReplyList" path="/reply/list" element={<ReplyList />} />
        </Routes>
      </Suspense>
    </Content>
  )
}
