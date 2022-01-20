import { REGISTRATION } from '../constants/actionTypes';

export default function registrationFormActive(state = {}, action) {
    if (action.type === REGISTRATION) {
      return {
        ...state,
        active: action.payload
      }
        
    }
    return state
  }