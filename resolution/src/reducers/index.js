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
            return repo.id === Number(repoId) ? { ...repo, tags: tags } : repo
          })
          return { username: star.username, repos: setTags() }
        }
        return star
      })
    // case 'APPLY_TAG_FILTER':
    //   return state.map(star => {
    //     if(star.username === action.username)
    //       return { ...star, repos: star.repos.filter(repo => repo.tags.some(tag => tag === action.q)) }
    //     return star
    //   })
    default:
      return state
  }
}

export default combineReducers({ stars })