import React from 'react'
import { Tag } from 'antd'

export const articleColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '图片',
    dataIndex: 'img_url',
    key: 'img_url',
    render: img => <img width="80px" src={img} alt="" />
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '分类',
    dataIndex: 'category_info',
    key: 'category_info',
    render: category => <div>{category && category.name}</div>
  },
  {
    title: '作者',
    dataIndex: 'admin_info',
    key: 'category_info',
    render: author => <div>{author && author.nickname}</div>
  },
  {
    title: '排序',
    dataIndex: 'sort_order',
    key: 'sort_order'
  },
  {
    title: '浏览次数',
    dataIndex: 'browse',
    key: 'browse'
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
