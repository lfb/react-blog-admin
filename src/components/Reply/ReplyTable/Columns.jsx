import React from 'react'
import { Tag } from 'antd'

export const replyColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 80
  },
  {
    title: '回复人',
    dataIndex: 'user_info',
    key: 'user_info',
    render: user => <div> {user ? user.username : '匿名'} </div>
  },
  {
    title: '回复人邮箱',
    dataIndex: 'email',
    key: 'email',
    render: email => <div> {email || '匿名'} </div>
  },
  {
    title: '回复文章ID',
    dataIndex: 'article_id',
    key: 'article_id'
  },
  {
    title: '回复文章',
    dataIndex: 'article',
    key: 'article',
    render: article => (article ? article.map(art => <div key={art.id}>{art.title}</div>) : '')
  },
  {
    title: '回复内容',
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
