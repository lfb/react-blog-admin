import React from 'react'
import { Tag } from 'antd'

export const commentsColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 80
  },
  {
    title: '评论人',
    dataIndex: 'user_info',
    key: 'user_info',
    render: user => <div> {user ? user.username : '匿名'} </div>
  },
  {
    title: '评论人邮箱',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: '评论文章ID',
    dataIndex: 'article_id',
    key: 'article_id'
  },
  {
    title: '评论文章',
    dataIndex: 'article',
    key: 'article',
    render: article => <div>{article ? article.title : '无'}</div>
  },
  {
    title: '评论内容',
    dataIndex: 'content',
    key: 'content',
    render: content => <div>{content}</div>
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <Tag color={status === 1 ? 'green' : 'magenta'} key={status}>
        {status === 1 ? '正常' : '隐藏'}
      </Tag>
    )
  }
]
