import { Button, Form, Input, Select } from 'antd'
import React, { useCallback } from 'react'
import { debounce } from 'lodash'

import './FormSearch.scss'

export default function ArticleFormSearch(props) {
  const [formRef] = Form.useForm()
  const { formItemMap = {}, initParams = {} } = props

  // 搜索 - 状态
  const onStatusChange = status => {
    props.setParams({
      ...props.params,
      status: parseInt(status, 10)
    })
  }

  // 搜索 - 关键字
  const onInputChange = useCallback(
    debounce(e => {
      props.setParams({
        ...props.params,
        [e.target.dataset.value_key]: e.target.value
      })
    }, 500),
    []
  )

  // 重置
  const resetForm = () => {
    props.setParams(initParams)
    formRef.resetFields()
  }

  // 触发传入的新增按钮方法
  const onAdd = () => props.onAdd?.()

  return (
    <div>
      <Form className="search-form-wrap" layout="inline" name="basic" form={formRef}>
        {formItemMap.status && (
          <Form.Item name="field-article-status" style={{ width: '8rem' }}>
            <Select placeholder="状态" onChange={onStatusChange} allowClear>
              {formItemMap.status.selectOption.map(opt => (
                <Select.Option key={opt.id} value={opt.value}>
                  {opt.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        )}

        {props.children}

        {formItemMap.input &&
          formItemMap.input.map(input => (
            <Form.Item key={input.fieldName} name={input.fieldName} style={{ width: '16rem' }}>
              <Input
                type="text"
                allowClear
                data-value_key={input.value_key}
                placeholder={input.placeholder || '内容'}
                onChange={onInputChange}
              />
            </Form.Item>
          ))}

        {formItemMap.button_reset && (
          <Form.Item>
            <Button onClick={resetForm}>{formItemMap.button_reset.name}</Button>
          </Form.Item>
        )}

        {formItemMap.button_add && (
          <Form.Item>
            <Button type="primary" onClick={onAdd}>
              {formItemMap.button_add.name}
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  )
}
