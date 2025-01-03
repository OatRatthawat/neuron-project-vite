import { http } from '../utils/http';

export const Login = (data) => {
    return http.post('/login', data)
}

export const ChangePassword = (data) => {
    return http.post('/password', data)
}