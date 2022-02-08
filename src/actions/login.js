import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { SET_USER, LOGOUT} from '../constants/actionTypes';
import Api from '../services/Api'

function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    }
}
export function login(payload, onError) {
    const { email, password } = payload;
    return async (dispatch) => {
        let response = await Api.post('/auth/signin', { email, password});
        localStorage.setItem('token', response.data.accessToken)
        dispatch(setUser(response.data.user));
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
    }
}
