import React, { useState } from 'react'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useCategory } from '../../request/api/category'
import CategoryFormSearch from './CategoryFormSearch/CategoryFormSearch'
import CategoryTable from './CategoryTable/CategoryTable'

export default function CategoryList() {
  useDocumentTitle('分类列表')
  const [params, setParams] = useState({})
  // 请求分类数据
  const { data: { data: categoryList = [], meta: pagination = {} } = {}, isLoading } = useCategory(params)

  // 编辑
  const onEdit = () => {
    console.log('onEdit')
  }

  return (
    <div>
      <CategoryFormSearch params={params} setParams={setParams} />
      <CategoryTable params={params} isLoading={isLoading} categoryList={categoryList} pagination={pagination} setParams={setParams} />
    </div>
  )
}
