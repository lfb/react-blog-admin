export const navList = [
  {
    key: 'home',
    title: '首页',
    children: []
  },
  {
    key: 'articles',
    title: '文章管理',
    children: [
      {
        key: 'articles-list',
        sub_title: '文章列表',
        path: '/articles/list'
      }
    ]
  },
  {
    key: 'category',
    title: '分类管理',
    children: [
      {
        key: 'category-list',
        sub_title: '分类列表',
        path: '/category/list'
      },
      {
        key: 'category-create',
        sub_title: '分类创建',
        path: '/category/create'
      }
    ]
  },
  {
    key: 'user',
    title: '用户管理',
    children: [
      {
        key: 'user-list',
        sub_title: '用户列表',
        path: '/user/list'
      }
    ]
  },
  {
    key: 'comments',
    title: '评论管理',
    children: [
      {
        key: 'comments-list',
        sub_title: '评论列表',
        path: '/comments/list'
      }
    ]
  },
  {
    key: 'reply',
    title: '回复管理',
    children: [
      {
        key: 'reply-list',
        sub_title: '回复列表',
        path: '/reply/list'
      }
    ]
  }
]
