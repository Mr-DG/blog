const userList = [
  {
    id: 1,
    name: 'user1',
    role: {
      roleId: 1,
      name: 'userAdmin'
    }
  },
  {
    id: 2,
    name: 'user2',
    role: {
      roleId: 2,
      name: 'admin'
    }
  },
  {
    id: 3,
    name: 'user3',
    role: {
      roleId: 3,
      name: 'user'
    }
  },
  {
    id: 4,
    name: 'user4',
    role: {
      roleId: 3,
      name: 'user'
    }
  },
]

const roleList = [
  {
    id: 1,
    name: 'superAdmin',
    permission: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  },
  {
    id: 2,
    name: 'admin',
    permission: [1, 2, 4, 5]
  },
  {
    id: 3,
    name: 'user',
    permission: [0, 1, 4]
  },
]

const permissionList = [
  // {
  //   id: 0,
  //   name: 'home',
  //   title: '工作台',
  //   pid: null,
  //   path: '/home',
  //   icon: 'icon-1',
  //   fullPath: '/',
  //   component: 'home/index'
  // },
  {
    id: 1,
    name: 'article',
    title: '文章管理',
    pid: null,
    path: 'article',
    icon: 'icon-shouye',
    fullPath: '/article',
    component: null
  },
  {
    id: 2,
    name: 'system',      // 路由别名
    title: '系统管理',    // 路由title 
    pid: null,           // 父级id，没有为null 
    path: '/system',     // 完整路径
    icon: 'icon-wode',   // icon
    component: null,     // 组件路径
    type: 0,             // 对应类型 0：目录，1：菜单，2：按钮
  },
  {
    id: 4,
    name: 'article-category',
    title: '文章分类',
    pid: 1,
    path: 'category',
    icon: 'icon-4',
    fullPath: '/article/category',
    component: 'article/category/index'
  },
  {
    id: 5,
    name: 'article-list',
    title: '文章详情',
    pid: 1,
    path: 'list',
    icon: 'icon-4',
    fullPath: '/article/list',
    component: 'article/list/index'
  },
  {
    id: 6,
    name: 'article-hot',
    title: '热门文章',
    pid: 1,
    path: 'hot',
    icon: 'icon-4',
    fullPath: '/article/hot',
    component: 'article/hot/index'
  },
  {
    id: 7,
    name: 'article-recommend',
    title: '文章推荐',
    pid: 1,
    path: 'recommend',
    icon: 'icon-4',
    fullPath: '/article/recommend',
    component: 'article/recommend/index'
  },
  {
    id: 8,
    name: 'project',
    title: '项目管理',
    pid: null,
    path: 'project',
    icon: 'icon-4',
    fullPath: '/project',
    component: null
  },
  {
    id: 9,
    name: 'project-category',
    title: '项目分类',
    pid: 8,
    path: 'category',
    icon: 'icon-4',
    fullPath: '/project/category',
    component: 'project/category/index'
  },
  {
    id: 10,
    name: 'project-list',
    title: '项目详情',
    pid: 8,
    path: 'list',
    icon: 'icon-4',
    fullPath: '/project/list',
    component: 'project/list/index'
  },
  {
    id: 11,
    name: 'user',
    title: '用户管理',
    pid: 2,
    path: '/system/user',
    icon: 'icon-5',
    // component: 'system/user/index'
    component: null,
    type: 0
  },
  {
    id: 14,
    name: 'test',
    title: '测试',
    pid: 11,
    path: '/system/user/test',
    icon: 'icon-5',
    component: 'system/user/test/index',
    type: 1
  },
  {
    id: 12,
    name: 'role',
    title: '角色管理',
    pid: 2,
    path: '/system/role',
    icon: 'icon-6',
    component: 'system/role/index',
    type: 1
  },
  {
    id: 13,
    name: '/system/permission',
    title: '权限管理',
    pid: 2,
    path: '/system/permission',
    icon: 'icon-6',
    component: 'system/permission/index',
    type: 1
  }
]

module.exports = {
  userList,
  roleList,
  permissionList
}


