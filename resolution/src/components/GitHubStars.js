import React from 'react';

import NavBar from './NavBar';
import Header from './Header';
import Repositories from './Repositories';

export default class GitHubStars extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <Header />
                </div>
                <div>
                    <Repositories />
                </div>
            </div>
        );
    }
}