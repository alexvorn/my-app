import Api from '../services/Api';
import { LOGIN } from '../constants/actionTypes';

export function getUsers () {
    const token = localStorage.getItem('token');
    return (dispatch) => {
        if (token) {
            Api.get('/users')
            .then(res => {
                dispatch({ 
                    type: LOGIN,
                    payload: res.data
                })
            })
        }
    }
}
