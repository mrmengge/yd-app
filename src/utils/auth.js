// 将token进行本地存储

// 设置token
const TOKEN_KEY = 'token'
export const setUser = (data) => {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}
// 获取token
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(TOKEN_KEY))
}
// 移除token
export const removeUser = () => {
  return window.localStorage.removeItem(TOKEN_KEY)
}
