import React, { useRef, useState } from 'react'
import { markdownRender } from './utils/markdown'
import { insertEditor } from './utils/textarea'
import MyUpload from '../MyUpload'

import './index.scss'
import 'highlight.js/styles/vs2015.css'

const CDN_HOST = `https://cdn.boblog.com/`

export default function createArticle() {
  const goodEditorRef = useRef(null)
  const [content, setContent] = useState('')

  const onUploadSuccess = ({ hash }) => {
    const imgURL = CDN_HOST + hash
    const newText = `![image](${imgURL})`

    insertEditor(goodEditorRef.current, newText)
    setContent(goodEditorRef.current.value)
  }

  const onUploadError = err => {
    console.log('err', err)
  }

  const onChangeTextarea = e => {
    setContent(e.target.value)
  }

  return (
    <section className="good-editor">
      <header className="good-editor-header">
        <MyUpload onUploadSuccess={onUploadSuccess} onUploadError={onUploadError} />
      </header>
      <section className="good-editor-content">
        <textarea
          name="textarea"
          id="good-good-editor-content-textarea"
          className="good-editor-content-textarea"
          ref={goodEditorRef}
          value={content}
          onInput={value => onChangeTextarea(value)}
          onChange={value => onChangeTextarea(value)}
        />
        <div className="good-editor-content-preview" dangerouslySetInnerHTML={markdownRender(content)} />
      </section>
    </section>
  )
}
