import { REGISTRATION } from '../constants/actionTypes';

export default function registrationFormActive(state = {}, action) {
  if (action.type === REGISTRATION) {
    return {
      ...state,
      user: action.payload
    };
      
  };
  return state;
};
