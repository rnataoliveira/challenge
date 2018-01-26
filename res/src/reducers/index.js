import { combineReducers } from 'redux'

const stars = (state = [], action) => {
  switch(action.type) {
    case 'REQUEST_USER_STARS':
      const currentUsers = state.filter(({ username }) => username !== action.username)
      const newUser = { username: action.username, isFetching: true, repos: [] }
      return [...currentUsers, newUser]
    case 'RECEIVE_USER_STARS':
      return state.map(userStars => {
        if(userStars.username === action.username)
          return { username: action.username, repos: action.stars }
        return userStars
      })
    default:
      return state
  }
}

export default combineReducers({ stars })