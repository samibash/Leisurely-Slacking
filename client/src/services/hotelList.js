import axios from 'axios'

const URL = 'http://localhost:3005';

const api = axios.create({
    baseURL:   `${URL}/hotels`
})

export const fetchHotel = async ()=>{
    try {
      const resp = await api.get('/')
    return resp.data.hotels;  
    } catch (e) {
        console.log(e)
    }
}

// export const createHotel = async (data)=>{
//     try {
//         const resp = await api.post('/', data)
//         console.log(resp)
//         return resp.data.hotel
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const UpdateHotel = async (id,data)=>{
//     try {
//        const resp = await api.put( `/ ${id}`, data)
//        return resp.data.hotel
//     } catch (error) {
//         console.log(error)
//     }
// }