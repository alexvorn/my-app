import Api from '../services/Api';
import { SET_USER } from '../constants/actionTypes';

export function getUsers () {
    const token = localStorage.getItem('token');
    return (dispatch) => {
        if (token) {
            Api.get('/users')
            .then(res => {
                dispatch({ 
                    type: SET_USER,
                    payload: res.data
                })
            })
        }
    }
}
