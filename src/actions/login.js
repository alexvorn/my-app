import { LOGIN } from '../constants/actionTypes';
import Api from '../services/Api'

export function login(payload) {
    const { email, password } = payload;
    return (dispatch) => {
        Api.post('/auth/signin', { email, password }).then(response =>{
            localStorage.setItem('token', response.data.accessToken)
            dispatch({ 
                type: LOGIN,
                payload: response.data.user
            });
        });
    }
}