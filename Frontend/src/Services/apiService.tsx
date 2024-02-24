import axios from 'axios';

const BASE_URL = 'http://localhost:4000/'

const apiService = {
    get: async (endpoint: any) => {
        const response = await axios.get(`${BASE_URL}${endpoint}`)
        return response.data;
    },
    post: async (endpoint: any, body: any) => {
        const response = await axios.post(`${BASE_URL}${endpoint}`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response.data
    },
    put: async (endpoint: any, body: any) => {
        const response = await axios.put(`${BASE_URL}${endpoint}`, body, {
            headers: {
                'Content-type': 'application/json'
            }
        })
        response.data
    },
    delete: async (endpoint: any) => {
        const response = await axios.delete(`${BASE_URL}${endpoint}`);
        response.data
    }

}

export default apiService;
