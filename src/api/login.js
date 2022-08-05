import axios from 'axios'
export function getloginuser (n) {
  return axios.post('/login/getuser', n)
}