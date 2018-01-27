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
    case 'SET_TAGS':
      const { username, repoId, tags } = action
      return state.map(star => {
        if(star.username === username)
        {
          const setTags = () => star.repos.map(repo => {
            return repo.id == repoId ? { ...repo, tags: tags } : repo
          })

          const result = { username: star.username, repos: setTags() }
          console.log(result)
          return result
        }
        return star
      })
    default:
      return state
  }
}

const tags = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({ stars, tags })