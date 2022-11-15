import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Layout } from 'antd'
import HomeContainer from '../../components/Home/index'
import ArticlesList from '../../components/Articles/list'
import CategoryList from '../../components/Category/list'
import CommentsList from '../../components/Comments/list'
import ReplyList from '../../components/Reply/list'

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
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/articles/list" element={<ArticlesList />} />
        <Route path="/category/list" element={<CategoryList />} />
        <Route path="/comments/list" element={<CommentsList />} />
        <Route path="/reply/list" element={<ReplyList />} />
      </Routes>
    </Content>
  )
}
