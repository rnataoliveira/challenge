import { combineReducers } from 'redux'
import Repositories from '../components/Repositories';

const tags = (state = [], action) => {
  switch (action.type) {
    case 'SET_TAGS':
      return [
        ...state,
        ...action.state,
        {
          id: action.id,
          tags: action.tags
        }
      ]
      break
    default:
      return state
      break
  }
}

export default combineReducers({ tags })