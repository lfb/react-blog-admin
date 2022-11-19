import React from 'react'
import { message, Upload } from 'antd'
import { PictureOutlined } from '@ant-design/icons'
import { useUploadToken } from '../../../request/api/upload'

const UPLOAD_ADDRESS = 'https://upload-z2.qiniup.com/'
const CDN_HOST = `https://cdn.boblog.com/`

export default function MyUpload(props = {}) {
  const { data: token = '' } = useUploadToken()

  const uploadProps = {
    action: UPLOAD_ADDRESS,
    listType: 'picture',
    name: 'file',
    showUploadList: false,
    beforeUpload: file => {
      message.open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 0,
        key: 'upload'
      })
    },
    onChange: info => {
      if (info.file.status === 'done') {
        message.destroy('upload')
        message.success(`file upload successful.`)
        props.onUploadSuccess?.({
          image: CDN_HOST + info.file.response.hash,
          ...info.file.response
        })
      } else if (info.file.status === 'error') {
        message.destroy('upload')
        message.error(`file upload failed.`)
        props.onUploadError?.({
          ...info.file.response,
          image: ''
        })
      }
    }
  }

  return (
    <Upload {...uploadProps} data={token}>
      {props.children || <PictureOutlined color="#2d8cf0" />}
    </Upload>
  )
}
