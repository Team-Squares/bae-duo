import axios from 'axios'

export const apiInstance = axios.create({
  //ex- process.env.NEXT_PUBLIC_BASE_URL
  baseURL: process.env.NEXT_PUBLIC_DEV_ADDRESS,
})
