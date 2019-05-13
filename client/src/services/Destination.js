import axios from 'axios'

const URL = 'http://localhost:3005';

const api = axios.create({
    baseURL:   `${URL}/destinations`
})

export const fetchDestination = async ()=>{
    try {
      const resp = await api.get('/')
    return resp.data.destinations;  
    } catch (e) {
        console.log(e)
    }
}

export const createDestination = async (data)=>{
    try {
        const resp = await api.post('/', data)
        console.log(resp)
        return resp.data.destination
    } catch (error) {
        console.log(error)
    }
}

export const UpdateDestination = async (id,data)=>{
    try {
       const resp = await api.put( `/ ${id}`, data)
       return resp.data.destination
    } catch (error) {
        console.log(error)
    }
}