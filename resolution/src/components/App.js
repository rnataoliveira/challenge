import React from 'react';
import Router from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserImport from './UserImport';
import Stars from './Stars';

export default class App extends React.Component {
    render() {
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={UserImport}/>
                    <Route exact path="/:username/stars" component={Stars}/>
                </Switch>
            </BrowserRouter>
        );
    }
}