import React from 'react';

import NavBar from './NavBar';
import Header from './Header';
import Repositories from './Repositories';

export default class Stars extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className='container'>
                    <Repositories username={this.props.match.params.username} />
                </div>
            </div>
        );
    }
}