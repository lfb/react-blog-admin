import React, { useState } from 'react'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'
import FormSearch from '../../Common/FormSearch/FormSearch'
import { commentsFormItemMap } from '../../../utils/form-search'
import { useCommentsList } from '../../../request/api/comments'
import CommentsTable from './Table'

export default function CommentsList() {
  useDocumentTitle('评论列表')

  const initParams = {
    page: 1,
    is_user: 1,
    is_article: 1
  }

  const [params, setParams] = useState(initParams)
  const { data: { data: commentsList = [], meta: pagination = {} } = {}, isLoading } = useCommentsList(params)

  return (
    <div>
      <FormSearch formItemMap={commentsFormItemMap} setParams={setParams} initParams={initParams} />
      <CommentsTable
        isLoading={isLoading}
        commentsList={commentsList}
        pagination={pagination}
        params={params}
        setParams={setParams}
      />
    </div>
  )
}
