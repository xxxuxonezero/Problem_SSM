export default {
  server: 'http://localhost:8089',
  transformData:function (data) {
    let params = new URLSearchParams();
    for (let key in data) {
      params.append(key,data[key])
    }
    return params
  }
}
