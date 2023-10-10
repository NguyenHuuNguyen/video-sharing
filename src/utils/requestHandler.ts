import axios from 'axios';
import { errorResponseHandler, successResponseHandler } from './responseHandler';

const requestHandler = axios.create({
  baseURL: 'http://localhost:5002/api/',
  timeout: 0,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

requestHandler.interceptors.request.use(
  (config: any) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
    return config
  },
  error => Promise.reject(error),
)

requestHandler.interceptors.response.use(successResponseHandler, errorResponseHandler)

export { requestHandler }
