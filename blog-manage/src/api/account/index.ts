import http from '@/http/index'

export function getUserInfo() {
  return http.get<API.User>('/system/user-info')
}
export function getUserRole() {
  return http.get<API.Role>('/system/user-role')
}
export function getUserMenus() {
  return http.get<API.Menus[]>('/system/permission')
}