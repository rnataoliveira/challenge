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

const tags = (state = {}, action) => {
  switch (action.type) {
    case 'OPEN_TAGS_MODAL':
      break
    case 'SET_TAGS':
      console.log(state)
      console.log(action)
      return state
    default:
      return state
  }
}

export default combineReducers({ stars, tags })