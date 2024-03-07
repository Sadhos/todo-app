import axios from "axios"
const instance = axios.create({
    // baseURL:"http://localhost:8000"
    baseURL: "https://todo-app-server-ecru-ten.vercel.app"
})
export default instance