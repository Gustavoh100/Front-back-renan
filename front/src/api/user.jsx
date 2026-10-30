import api from './api'

// /buscar 

// buscar um 

// criar 
export const loginCriar = async (nome , email, password) => {
    const body = {nome ,  email, password }
    const response = await api.post('/v1/user/criar', body, {
        headers: {'Content-Type': 'application/json'}
    })

    return response.data
}

// alterar /alterar
export const login = async (nome , email, password) => {
    const body = {nome ,  email, password }
    const response = await api.post('/v1/user/criar', body, {
        headers: {'Content-Type': 'application/json'}
    })
// /deletar


export const loginUser = async (email, password) => {
    const body = { email, password }
    const response = await api.post('/v1/user/login', body, {
        headers: {'Content-Type': 'application/json'}
    })

    return response.data
}






















