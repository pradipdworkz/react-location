import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getPosts = async () => {
    const response = await axiosInstance.get("/posts")
    return response.data
}

export const createPost = (data: any) => axiosInstance.post("/posts", data)

export const getPost = async (id: number) => {
    const response = await axiosInstance.get(`/posts/${id}`)
    return response.data
}