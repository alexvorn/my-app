import { LOGIN } from '../constants/actionTypes';
import axios from 'axios';
import api from './api'

export function login(payload) {
    const { email, password } = payload;
    return (dispatch) => {
        api.post('/auth/signin', { email, password }).then(response =>{
            localStorage.setItem('token', response.data.accessToken)
            dispatch({ 
                type: LOGIN,
                payload: response.data.user
            });
        });
    }
}