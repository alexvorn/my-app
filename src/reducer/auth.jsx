export default function loginReducer(state = {}, action) {
    if (action.type === 'user') {
      return {
        ...state,
        user: action.user
      }
    }
    return state
  }