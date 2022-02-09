import { SET_USER, LOGOUT, ERROR} from '../constants/actionTypes';

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
        case ERROR: 
            return {
                ...state,
                error: action.payload,
        };
        default:
            return state;
    }
};
