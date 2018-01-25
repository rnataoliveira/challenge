import { combineReducers } from 'redux'

const stars = (state = null, action) => state
const tags = (state = null, action) => state

export default combineReducers({ stars, tags })