import request from '@/utils/request'
const apiPath = '/api/sms'

export default {

  sendMessage(mobile) {
    return request({
      baseURL: 'http://localhost:8160',
      url: `${apiPath}/send/${mobile}`,
      method: 'get'
    })
  }
}
