import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import UserImport from './UserImport'
import Stars from './Stars'
import SearchForm from './SearchForm'
import Modal from './Modal'

const App = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
          <Link to="/" className="navbar-brand">GitHub Stars</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
           <SearchForm />
          </div>
      </div>
    </nav>
    <Switch>
      <Route exact path="/" component={UserImport} />
      <Route path="/:username/stars" component={Stars} />>
    </Switch>
  </div>
)

export default App
