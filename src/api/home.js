import request from '@/utils/request.js'
export function getdata () {
  return request({
    url: '/home/getdata',
    method: 'get'
  })

}