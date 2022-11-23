declare namespace API {
  // 用户信息中的角色
  type UserRole = {
    roleId: number,
    name: string
  }

  // 用户信息
  type User = {
    id: number,
    name: string,
    role: UserRole
  }

  // 角色（包含权限id列表）
  type Role = {
    id: number,
    name: string,
    permission: number[]
  }

  // 拥有的权限项
  type Menus = {
    id: number,
    name: string,
    title: string,
    pid: number | null,
    path: string,
    icon: string
    component: string,
    redirect?: string,
    type: number
  }
}