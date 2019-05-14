import axios from 'axios'

const URL = 'http://localhost:3005';

const api = axios.create({
    baseURL:   `${URL}/bars`
})

export const fetchAllBars = async ()=>{
    try {
      const resp = await api.get('/')
    return resp.data.bars;  
    } catch (e) {
        console.log(e)
    }
}

