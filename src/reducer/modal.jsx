export default function modalReducer(state = {}, action) {
    if (action.type === 'modal') {
      return {
        ...state,
        active: action.active
      }
        
    }
    return state
  }