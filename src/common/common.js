import axios from 'axios'
import commonStore from 'src/store/common.js'
import storage from './storage'
import api from './api'

global.api = api
global.axios = axios
global.storage = storage

axios.interceptors.request.use(
  config => {
    if (config.name) {
      commonStore.setLoading(config.name, true)
    }
    if (!config.silentLoading) {
      commonStore.increaseLoadingCount()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// response拦截
axios.interceptors.response.use(
  response => {
    const { config } = response
    if (config.name) {
      commonStore.setLoading(config.name, false)
    }
    if (!config.silentLoading) {
      commonStore.decreaseLoadingCount()
    }
    if (response.data.code !== 200) {
      return Promise.reject(response.data.msg)
    }
    return (response.data && response.data.data) || response.data
  },
  error => {
    const err = error.response
    if (err) {
      switch (err.status) {
        case 401:
          break
        default:
          return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)
