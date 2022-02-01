import { REGISTRATION } from '../constants/actionTypes';

export default function userRegistration(state = {}, action) {
  if (action.type === REGISTRATION) {
    return {
      ...state,
      user: action.payload
    };
      
  };
  return state;
};
