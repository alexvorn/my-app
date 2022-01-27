import Api from './api';
import { LOGIN } from '../constants/actionTypes';

export function users () {
    return (dispatch) => {
        Api.get('/users', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            dispatch({ 
                type: LOGIN,
                payload: res.data
            })
        })
    }
}