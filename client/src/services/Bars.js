import axios from 'axios'

const URL = 'http://localhost:3005';

const api = axios.create({
    baseURL: `${URL}/bars`
})

export const fetchAllBars = async () => {
    try {
        const resp = await api.get('/')
        return resp.data;  
    } catch (e) {
        console.log({msg:'e',e})
    }
}

export const createBar = async (data) => {
    try {
      const resp = await api.post('/', data)
      console.log(resp)
      return resp.data
    } catch (e) {
      console.log(e)
    }
}

export const updateBar = async (id, data) => {
    try {
        const resp = await api.put(`/${id}`, data)
        console.log(resp)
        return resp.data
    } catch (error) {
        console.log(error)
    }
}


