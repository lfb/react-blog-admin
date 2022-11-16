import { Button, Space, Table, Tag } from 'antd'
import React from 'react'

const { Column } = Table

export default function ArticleTable(props) {
  const { isLoading, article, pagination, setParams, params } = props

  // Table 页码切换
  const onTableChange = ({ current }) => {
    setParams({
      ...params,
      page: current
    })
  }

  // 编辑
  const onEdit = () => {
    console.log('onEdit')
  }

  return (
    <Table loading={isLoading} rowKey="id" dataSource={article} pagination={pagination} onChange={onTableChange}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="图片" dataIndex="img_url" key="img_url" render={img => <img width="80px" src={img} alt="" />} />
      <Column title="标题" dataIndex="title" key="title" />
      <Column title="分类" dataIndex="category_info" key="category_info" render={category => <div>{category && category.name}</div>} />
      <Column title="作者" dataIndex="admin_info" key="admin_info" render={admin => <div>{admin && admin.nickname}</div>} />
      <Column
        title="状态"
        dataIndex="status"
        key="status"
        render={status => (
          <Tag color={status === 1 ? 'green' : 'magenta'} key={status}>
            {status === 1 ? '正常' : '隐藏'}
          </Tag>
        )}
      />
      <Column title="排序" dataIndex="sort_order" key="sort_order" />
      <Column title="浏览次数" dataIndex="browse" key="browse" />

      <Column
        title="操作"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <Button type="ghost">预览</Button>
            <Button type="primary" onClick={() => onEdit(record.id)}>
              编辑
            </Button>
            <Button type="danger">删除</Button>
          </Space>
        )}
      />
    </Table>
  )
}
