import { REGISTRATION } from '../constants/actionTypes';
import Api from './api'

export function registration(payload) {
    const { email, password, userType } = payload;
    return (dispatch) => {
        Api.post('/auth/register', { email, password, userType }).then(response =>{
            dispatch({ 
                type: REGISTRATION,
                payload: response.data.user,
                
            });
        });
    }
}