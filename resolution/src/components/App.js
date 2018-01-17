import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'

import UserImportContainer from './UserImportContainer'
import Stars from './Stars'

export default class App extends Component {
    render() {
        return ( 
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={UserImportContainer}/>
                    <Route path="/:username/stars" component={Stars}/>
                </Switch>
            </div>
        )
    }
}