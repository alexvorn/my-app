import { LOGIN } from '../constants/actionTypes';
import Ip from '../services/Ip'

export function login(payload) {
    const { email, password } = payload;
    return (dispatch) => {
        Ip.post('/auth/signin', { email, password }).then(response =>{
            localStorage.setItem('token', response.data.accessToken)
            dispatch({ 
                type: LOGIN,
                payload: response.data.user
            });
        });
    }
}