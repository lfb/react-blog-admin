import React from 'react'
import { Tag } from 'antd'
import { commonsStatusTagColor, commonsStatusText } from '../../../../utils/form-search'

export const commentsColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 80
  },
  {
    title: '昵称',
    dataIndex: 'user_info',
    key: 'user_info',
    render: user => <div> {user ? user.username : '匿名'} </div>
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    render: email => <div> {parseInt(email, 10) === 0 ? '匿名' : email} </div>
  },
  {
    title: '文章',
    dataIndex: 'article',
    key: 'article',
    render: article => <div>{article ? `${article.id} - ${article.title}` : '无'}</div>
  },
  {
    title: '评论内容',
    dataIndex: 'content',
    key: 'content',
    render: content => <div>{content}</div>
  },
  {
    title: '审核状态',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <Tag color={commonsStatusTagColor[status]} key={status}>
        {commonsStatusText[status]}
      </Tag>
    )
  }
]
