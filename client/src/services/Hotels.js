import axios from 'axios'

const URL = 'http://localhost:3005';

const api = axios.create({
    baseURL: `${URL}/hotels`
})

export const fetchHotel = async ()=>{
    try {
        const resp = await api.get('/')
        return resp.data.allHotels;  
    } catch (e) {
        console.log(e)
    }
}
