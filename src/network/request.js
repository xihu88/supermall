import axios from 'axios'
export function request (config){
  const axiosInstance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout:5000
  })

axiosInstance.interceptors.request.use(config => {
  return config
},err => {

})
axiosInstance.interceptors.response.use(res => {
  return res
},err => {
  console.log(err);
})

return axiosInstance(config)

}