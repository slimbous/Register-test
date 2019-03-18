
import { REGISTER } from '../actions/userActions';

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export function registration(state = [], action) {
  const newState = Object.assign(state, {});

  switch (action.type) {
    
    case REGISTER:
      let user = {
        username: action.payload.username,
      }
      newState.push(user)
      state = [...newState]
      return state

    default:
      return state
  }
}