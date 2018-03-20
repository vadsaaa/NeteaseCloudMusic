import axios, { AxiosRequestConfig } from 'axios'
import api from './api'

// interface AxiosConfig extends AxiosRequestConfig {
//   name?: string
//   silentLoading?: boolean
// }

// request拦截
// axios.interceptors.request.use(
//   (config: AxiosConfig) => {
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
// response拦截
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     const err = error.response
//     if (err) {
//       switch (err.status) {
//         case 401:
//           break
//         default:
//           return Promise.reject(error)
//       }
//     }
//     return Promise.reject(error)
//   }
// )

export { axios, api }
