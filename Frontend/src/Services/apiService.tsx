import axios from 'axios';

const BASE_URL = 'http://localhost:4000/'
const token = localStorage.getItem('authToken')

const apiService = {
    get: async (endpoint: any) => {
        const response = await axios.get(`${BASE_URL}${endpoint}`)
        return response ;
    },
    post: async (endpoint: any, body: any) => {

        const response = await axios.post(`${BASE_URL}${endpoint}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return response
    },
    imagePost: async (endpoint: any, body: FormData) => {
        const response = await axios.post(`${BASE_URL}${endpoint}`, body, {
            headers: {
                'Content-Type': "multipart/form-data",
                'Authorization': `Bearer ${token}`
            }
        })
        return response
    },
    put: async (endpoint: any, body: any) => {
        const response = await axios.put(`${BASE_URL}${endpoint}`, body, {
            headers: {
                'Content-type': 'application/json'
            }
        })
        response
    },
    delete: async (endpoint: any) => {
        const response = await axios.delete(`${BASE_URL}${endpoint}`);
        response
    }
}

export default apiService;
