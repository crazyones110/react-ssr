import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://47.95.113.63/ssr'
})