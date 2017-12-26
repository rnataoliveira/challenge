import React from 'react';

import NavBar from './NavBar';
import Header from './Header';
import Repositories from './Repositories';

export default class Stars extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavBar />
                <Header />
            </div>
        );
    }
}