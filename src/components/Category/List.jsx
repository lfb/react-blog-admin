import React, { useState } from 'react'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useCategory } from '../../request/api/category'
import CategoryTable from './CategoryTable/CategoryTable'
import { categoryFormItemMap } from '../../utils/form-search'
import FormSearch from '../Common/FormSearch/FormSearch'

export default function CategoryList() {
  useDocumentTitle('分类列表')
  const [params, setParams] = useState({})
  // 请求分类数据
  const { data: { data: categoryList = [], meta: pagination = {} } = {}, isLoading } = useCategory(params)

  return (
    <div>
      <FormSearch formItemMap={categoryFormItemMap} params={params} setParams={setParams} />
      <CategoryTable params={params} isLoading={isLoading} categoryList={categoryList} pagination={pagination} setParams={setParams} />
    </div>
  )
}
