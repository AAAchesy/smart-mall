const INFO_KEY = 'smart_mall_info'

export const getInfo = () => {
  const defaultInfo = { token: '', userId: '' }
  const res = localStorage.getItem(INFO_KEY)
  return res ? JSON.parse(res) : defaultInfo
}

export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
