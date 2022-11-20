import React, { useRef, useState } from 'react'
import { markdownRender } from './utils/markdown'
import { insertEditor } from './utils/textarea'
import MyUpload from '../MyUpload'

import './index.scss'
import 'highlight.js/styles/vs2015.css'

export default function createArticle(props) {
  const goodEditorRef = useRef(null)
  const [content, setContent] = useState(props.content || '')

  // 图片上传成功回调方法
  const onUploadSuccess = ({ image } = {}) => {
    const oldValue = goodEditorRef.current.value
    const newText = `${oldValue ? '\n' : ''}![image](${image})\n`

    insertEditor(goodEditorRef.current, newText)
    setContent(goodEditorRef.current.value)
  }

  // 设置内容
  const onChangeTextarea = e => setContent(e.target.value)
  // 失焦回调触发传入设置内容方法
  const onBlur = () => props.onChange?.(content)

  return (
    <section className="good-editor">
      <header className="good-editor-header">
        <MyUpload onUploadSuccess={onUploadSuccess} />
      </header>
      <section className="good-editor-content">
        <textarea
          ref={goodEditorRef}
          value={content}
          name="textarea"
          placeholder="请输入内容"
          id="good-good-editor-content-textarea"
          className="good-editor-content-textarea"
          onBlur={onBlur}
          onChange={value => onChangeTextarea(value)}
        />
        <div className="good-editor-content-preview" dangerouslySetInnerHTML={markdownRender(content)} />
      </section>
    </section>
  )
}
