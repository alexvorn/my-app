import { LOGOUT } from '../constants/actionTypes';

export function logout() {
    localStorage.removeItem('token');
    return {
        type: LOGOUT,
    };
};
