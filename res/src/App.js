import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import logo from './logo.svg'
import './App.css'

import UserImport from './components/UserImport'
import Stars from './components/Stars'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route exact path="/" component={UserImport} />
          <Route path="/:username/stars" component={Stars} />
        </Switch>
      </div>
    )
  }
}

export default App;
