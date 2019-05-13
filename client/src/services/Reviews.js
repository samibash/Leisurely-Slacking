import axios from 'axios'

const URL = 'http://localhost:3005';

const api = axios.create({
    baseURL:   `${URL}/reviews`
})

export const fetchReview = async ()=>{
    try {
      const resp = await api.get('/')
    return resp.data.reviews;  
    } catch (e) {
        console.log(e)
    }
}

export const createReview = async (data)=>{
    try {
        const resp = await api.post('/', data)
        console.log(resp)
        return resp.data.review
    } catch (error) {
        console.log(error)
    }
}

export const UpdateReview = async (id,data)=>{
    try {
       const resp = await api.put( `/ ${id}`, data)
       return resp.data.review
    } catch (error) {
        console.log(error)
    }
}