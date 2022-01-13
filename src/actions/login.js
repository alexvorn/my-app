import { LOGIN } from '../constants/actionTypes';

export function login(payload) {
    return {
        type: LOGIN,
        payload,
    }
}