// 定义通用键名
const INFO_KEY = 'smart_mall_info'
const HISTORY_KEY = 'history_list'

// 获取个人信息
export const getInfo = () => {
  const defaultInfo = { token: '', userId: '' }
  const res = localStorage.getItem(INFO_KEY)
  return res ? JSON.parse(res) : defaultInfo
}

// 设置个人信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 移除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取搜索历史
export const getHistoryList = () => {
  const res = localStorage.getItem(HISTORY_KEY)
  return res ? JSON.parse(res) : []
}

// 设置搜索历史
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
