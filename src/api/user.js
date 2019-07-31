// 处理用户相关的API请求，发送请求的api
import request from '@/utils/request.js'

export const login = ({ mobile, code }) => {
  return request({
    method: 'post',
    url: `/app/v1_0/authorizations`,
    data: {
      mobile,
      code
    }
  })
}
