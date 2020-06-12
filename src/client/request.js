import axios from 'axios'
import config from '../config'

export const instance = axios.create({
  baseURL: '/',
  params: {
    secret: config.secret
  }
});