import { SET_USER, LOGOUT, REGISTRATION } from '../constants/actionTypes';

export default function authReducer(state = {}, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT: 
            return {
                ...state,
                user: null,
            };
        case REGISTRATION: 
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
