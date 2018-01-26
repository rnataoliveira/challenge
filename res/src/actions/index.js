import { push } from 'react-router-redux'

export const requestUserStars = username => ({ type: 'REQUEST_USER_STARS', username })

export const receiveUserStars = (username, stars) => ({
  type: 'RECEIVE_USER_STARS',
  username,
  stars: stars.map(repo => ({
    id: repo.id,
    name: repo.full_name,
    description: repo.description,
    url: repo.url,
    language: repo.language,
    tags: []
  }))
})

export const fetchUserStars = username => dispatch => {
  // First dispatch: the app state is updated to inform
  // that the API call is starting.
  dispatch(requestUserStars(username))

  fetch(`https://api.github.com/users/${username}/starred?sort=updated&direction=desc`)
    .then(response => response.json())
    .then(json => dispatch(receiveUserStars(username, json)))
    .then(_ => dispatch(push(`${username}/stars`)))
}