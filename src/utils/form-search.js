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

// 默认状态数据
const commentsDefaultStatus = {
  selectOption: [
    {
      id: 10001,
      value: 0,
      name: '待审核'
    },
    {
      id: 10002,
      value: 1,
      name: '审核通过'
    },
    {
      id: 10003,
      value: 2,
      name: '审核不通过'
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

// 评论
export const commentsFormItemMap = {
  status: commentsDefaultStatus,
  input: [
    {
      fieldName: 'field-comments-id',
      value_key: 'id',
      placeholder: '评论ID'
    },
    {
      fieldName: 'field-article-id',
      value_key: 'article_id',
      placeholder: '文章ID'
    },
    {
      fieldName: 'field-content',
      value_key: 'content',
      placeholder: '评论内容'
    }
  ],
  button_reset: {
    name: '重置条件'
  }
}

// 回复
export const replyFormItemMap = {
  status: commentsDefaultStatus,
  input: [
    {
      fieldName: 'field-comments-id',
      value_key: 'id',
      placeholder: '回复ID'
    },
    {
      fieldName: 'field-article-id',
      value_key: 'article_id',
      placeholder: '文章ID'
    },
    {
      fieldName: 'field-content',
      value_key: 'content',
      placeholder: '回复内容'
    }
  ],
  button_reset: {
    name: '重置条件'
  }
}

// 评论下的状态文案
export const commonsStatusText = {
  0: '待审核',
  1: '审核通过',
  2: '审核不通过'
}
// 评论下的状态Tag颜色
export const commonsStatusTagColor = {
  0: 'purple',
  1: 'green',
  2: 'magenta'
}
