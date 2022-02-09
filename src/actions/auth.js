import { SET_USER, LOGOUT, ERROR } from '../constants/actionTypes';
import Api from '../services/Api';

function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    }
}

function errorMessage(error) {
    return {
        type: ERROR,
        payload: error,
    }
}

export function login(payload) {
    const { email, password } = payload;
    return async (dispatch) => {
        Api.post('/auth/signin', { email, password}).then(res => { 
            localStorage.setItem('token', res.data.accessToken)
            dispatch(setUser(res.data.user));
            dispatch(errorMessage(''));
        })
        .catch(error => {
            dispatch(errorMessage(error.response.data.message[0]));
        });
        
    }
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: LOGOUT,
    };
};

export function registration(payload) {
    const { email, password, userType } = payload;
    return (dispatch) => {
        Api.post('/auth/register', { email, password, userType }).then(response =>{
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setUser(response.data.user));
        });
    };
};
