import React, { useState } from 'react'

import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { useArticlesList } from '../../request/api/articles'
import FromSearch from './ArticleFormSearch/ArticleFormSearch'
import ArticleTable from './ArticleTable/ArticleTable'

export default function ArticlesList() {
  useDocumentTitle('文章列表')

  // 请求文章数据
  const [params, setParams] = useState({})
  const { data: { data: article = [], meta: pagination = {} } = {}, isLoading } = useArticlesList(params)

  return (
    <div>
      <FromSearch params={params} setParams={setParams} />
      <ArticleTable isLoading={isLoading} article={article} pagination={pagination} params={params} setParams={setParams} />
    </div>
  )
}
