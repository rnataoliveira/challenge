import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import App from './components/App'

import root from './reducers'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedState = localStorage.getItem('redux-state') ? 
  JSON.parse(localStorage.getItem('redux-state')) : {}

const store = createStore(
  combineReducers({ root, router: routerReducer }),
  persistedState,
  composeEnhancers(applyMiddleware(middleware, thunkMiddleware))
)

store.subscribe(() => localStorage.setItem('redux-state', JSON.stringify(store.getState())))

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

render(app, document.getElementById('root'))

registerServiceWorker()
