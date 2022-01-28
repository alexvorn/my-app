import Ip from '../services/Ip';
import { LOGIN } from '../constants/actionTypes';

export function getUsers () {
    return (dispatch) => {
        Ip.get('/users')
        .then(res => {
            dispatch({ 
                type: LOGIN,
                payload: res.data
            })
        })
    }
}
