import { LOGIN, LOGOUT } from '../constants/actionTypes';

export default function authReducer(state = {}, action) {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT: 
            return {
                ...state,
                user: null,
            };
    }

    return state;
};
