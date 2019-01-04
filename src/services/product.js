import axios from 'axios'

const host = 'http://localhost:3000/products'

//create a store
export const newProduct = (product) => {
    return axios.post(host+'/product', product)
        .then(r=>r.data)
        .catch(e=>e.response)
}