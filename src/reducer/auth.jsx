import { LOGIN, LOGOUT } from '../constants/actionTypes';

export default function authReducer(state = {}, action) {
    if (action.type === LOGIN) {
        return {
            ...state,
            user: action.payload
        };
    };
    if (action.type === LOGOUT) {
        return {
            ...state,
            user: null,
        };
    };

    return state;
};
