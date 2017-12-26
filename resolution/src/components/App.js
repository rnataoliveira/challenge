import React from 'react';
import Router from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import GitHubStars from './GitHubStars';
import GetUserStars from './GetUserStars';
import GitHubStars from './GitHubStars';

export default class App extends React.Component {
    render() {
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={GetUserStars}/>
                    <Route exact path="/stars" component={GitHubStars}/>
                </Switch>
            </BrowserRouter>
        );
    }
}