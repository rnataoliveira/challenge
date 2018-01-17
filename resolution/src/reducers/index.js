import { combineReducers } from 'redux'
// import { push } from 'react-router-redux'

// const redirect = (path) => {
//   dispatch(push(path))
// }

const tags = (state = [], action) => {
  switch (action.type) {
    case 'SET_TAGS':
      return state.map(repository => {
        if(repository.id === action.id)
          return { ...repository, tags: action.tags }
        return repository
      })
    case 'SEARCH_TAG':
      return
    default:
      return state;
  }
}

const stars = (state = null, action) => {
  switch(action.type) {
    case 'IMPORT_STARS':
      return 
        fetch(`https://api.github.com/users/${action.username}/starred?sort=updated&direction=desc`, { method: 'GET '})
        .then(response => Promise.all([response, response.json()]))
        .then(repositories => {
          return repositories.map(repository => {
            return {
              id: repository.id,
                name: repository.full_name,
                description: repository.description,
                url: repository.url,
                language: repository.language,
                tags: []
            }
          })
        })
    case 'FETCH_STARS_HAS_ERRORED':
      return action.hasErrored
    case 'FETCH_STARS_IS_LOADING':
      return action.isLoading
    case 'FETCH_STARS_SUCCESS':
      return action.stars
        // .then(redirect(`${action.username}/stars`))
 // case 'CHANGE_ROUTE':
//   return 
    default:
      return state
  }
}

export default combineReducers({ tags, stars })

