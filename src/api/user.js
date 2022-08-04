import request from '@/utils/request.js'
import axios from 'axios'
export function getUser (params) {

  return request({
    url: '/user/getUser',
    params
  })
}
export function addUser (n) {
  axios.post('/user/add', n).then((res) => {
    console.log(res)
  })
}
export function updateUser (n) {
  axios.post('/user/edit', n).then((res) => {
    console.log(res)
  })
}
export function DeleteUser (n) {
  axios.post('/user/del', n).then((res) => {
    console.log(res)
  })
}