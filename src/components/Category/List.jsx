import React, { useState } from 'react'
import { Button, Space } from 'antd'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useCategory } from '../../request/api/category'
import CategoryTable from './CategoryTable'
import { categoryFormItemMap as formItemMap } from '../../utils/form-search'
import FormSearch from '../Common/FormSearch/FormSearch'
import { categoryColumns } from './CategoryTable/Columns'

export default function CategoryList() {
  useDocumentTitle('分类列表')
  const [params, setParams] = useState({})
  // 请求分类数据
  const { data: { data: categoryList = [], meta: pagination = {} } = {}, isLoading } = useCategory(params)

  const onEdit = () => console.log('d')

  // 绑定方法，所以抽出来
  const columnsActions = {
    title: '操作',
    dataIndex: 'browse',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type="ghost">预览</Button>
        <Button type="primary" onClick={() => onEdit(record.id)}>
          编辑
        </Button>
        <Button type="danger">删除</Button>
      </Space>
    )
  }

  const columns = [...categoryColumns, columnsActions]

  return (
    <div>
      <FormSearch formItemMap={formItemMap} params={params} setParams={setParams} />
      <CategoryTable
        columns={columns}
        params={params}
        isLoading={isLoading}
        categoryList={categoryList}
        pagination={pagination}
        setParams={setParams}
      />
    </div>
  )
}
