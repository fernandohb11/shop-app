import axios from 'axios'

const host = 'http://localhost:3000/api'

//signup
export const signup = (user) => {
    return axios.post(host+'/signup', user)
        .then(r=>r.data)
        .catch(e=>e.response)
}

//login

//logout

//profile
