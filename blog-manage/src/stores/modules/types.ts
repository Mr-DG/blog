export type Menus = MenusItem[]

export interface MenusMeta {
  title: string, // 标题
  icon: string, // icon组件名
  fullPath: string, // 指包括父级的path，完整的路径
  namePath: string[], // 一个数组记录它所有父级的path
  keepAlive: boolean, // 是否需要缓存
}

export interface MenusItem {
  name: string,   // 组件名
  path: string,   // 指当前组件自己的path
  // component: () => import(....),
  redirect?: string // 如果是sub层的话，如要重定向
  meta: MenusMeta
}