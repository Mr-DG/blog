/**
 * @param { Array } list 传入的数组
 * @param { Number } pid 父id
 * @return { Array:Tree } list
 */

export interface MenusTree extends API.Menus {
  children?: Array<MenusTree>
}

// 将list转树结构
export function listToTree(list: API.Menus[], pid: number | null = null): Array<MenusTree> {
  return list.filter(item => item.pid == pid).map(item => {
    let children = listToTree(list, item.id)
    if (children.length > 0) {
      return { ...item, children }
    } else {
      return { ...item }
    }
  })
}
/**
 * @param {Array} list 树形数据
 * @param {string} name 路由对应的name
 * @returns {Array<string>} 包含所有父级path的数组
 */
// 找到当前路由的name和menus的name比较找出所有父级key(menus.path完整路径)
export function findAllParentPath(list: any[], name: string): string[] {
  let parentPath: string[] = []
  let going = true
  let walker = (list: any[], name: string) => {
    list.forEach(item => {
      if (!going) return
      parentPath.push(item.path)
      if (item.name === name) {
        going = false
      } else if (item.children) {
        walker(item.children, name)
      } else {
        parentPath.pop()
      }
    })
    if (going) parentPath.pop()
  }
  walker(list, name)
  parentPath.pop()
  return parentPath
}

/**
 * 扁平化树
 * @param {Array} arrs 树形数据
 * @param {string} childs 树形数据子数据的属性名,常用'children'
 * @param {Array} attrArr 需要提取的公共属性数组(默认是除了childs的全部属性)
 * @returns
 */
export function extractTree<T>(arrs: Array<T>, childs: string, attrArr?: Array<string>) {
  // 扁平之后需要保留的字段
  let attrList: Array<string> = []

  if (!arrs.length) return []
  // 如果没有传需要保留的字段默认保留所有
  if (!attrArr) {
    attrList = Object.keys(arrs[0] as object)
    attrList.splice(attrList.indexOf(childs), 1)
  } else {
    attrList = attrArr
  }

  let list: Array<T> = []
  const getObj = (arr: Array<T>) => {
    // 遍历原始树
    arr.forEach((row) => {
      let obj = {}
      // 把原始树对应的字段都放进obj中然后push进list里
      attrList.forEach(item => {
        (obj as any)[item] = (row as any)[item]
      })
      list.push(obj as T)
      if ((row as any)[childs]) {
        getObj((row as any)[childs])
      }
    })
    return list
  }
  return getObj(arrs)
}
