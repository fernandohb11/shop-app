import axios from 'axios'

const host = 'http://localhost:3000/stores'

//create a store
export const newStore = (store) => {
    return axios.post(host+'/store', store)
        .then(r=>r.data)
        .catch(e=>e.response)
}