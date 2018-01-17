import React from 'react'
import { Route, Link } from 'react-router-dom'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'

import store from './store'

//Components
import App from './components/App';

const history = createHistory()

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

render(router, document.getElementById('app'))
registerServiceWorker()

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
