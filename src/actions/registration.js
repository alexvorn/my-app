import { REGISTRATION } from '../constants/actionTypes';
import Ip from '../services/Ip'

export function registration(payload) {
    const { email, password, userType } = payload;
    return (dispatch) => {
        Ip.post('/auth/register', { email, password, userType }).then(response =>{
            dispatch({ 
                type: REGISTRATION,
                payload: response.data.user,
                
            });
        });
    }
}
