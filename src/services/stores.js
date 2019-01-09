import axios from 'axios'

const host = 'https://ironbutik.herokuapp.com/stores'

//create a store
export const newStore = (store) => {
    return axios.post(host+'/store', store)
        .then(r=>r.data)
        .catch(e=>e.response)
}