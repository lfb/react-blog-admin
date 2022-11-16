// 默认状态数据
const defaultStatus = {
  selectOption: [
    {
      id: 10001,
      value: 0,
      name: '隐藏'
    },
    {
      id: 10002,
      value: 1,
      name: '正常'
    }
  ]
}

// 文章
export const articleFormItemMap = {
  status: defaultStatus,
  input: [
    {
      fieldName: 'field-article-keyword',
      value_key: 'keyword',
      placeholder: '文章标题'
    }
  ],
  button_reset: {
    name: '重置条件'
  },
  button_add: {
    name: '新增文章'
  }
}

// 分类
export const categoryFormItemMap = {
  status: defaultStatus,
  input: [
    {
      fieldName: 'field-category-name',
      value_key: 'name',
      placeholder: '分类名称'
    }
  ],
  button_reset: {
    name: '重置条件'
  },
  button_add: {
    name: '新增分类'
  }
}

// 用户
export const userFormItemMap = {
  status: defaultStatus,
  input: [
    {
      fieldName: 'field-username',
      value_key: 'username',
      placeholder: '用户名称'
    }
  ],
  button_reset: {
    name: '重置条件'
  }
}
