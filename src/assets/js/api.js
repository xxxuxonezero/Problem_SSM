import axios from 'axios'
const service=axios.create({
  baseURL:'http://localhost:8089',
  timeout:3000,
  withCredentials:true
})
export default {
  server: 'http://localhost:8089',
  transformData:function (data) {
    let params = new URLSearchParams();
    for (let key in data) {
      params.append(key,data[key])
    }
    return params
  },
  service:service
}
