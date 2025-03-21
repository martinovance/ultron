/* eslint-disable */
import axios from "axios"
import Auth from "./auth"

export const base_url = "http://localhost:5174"

const Api = axios.create({
  baseURL: base_url,
})

Api.interceptors.request.use(
  (config) => {
    if (Auth.isAuthenticated()) {
      config.headers["Authorization"] = `Bearer ${Auth.getToken()}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Api
