import React, { Component } from 'react'

import NavBar from './NavBar'
import Header from './Header'
import Repositories from './Repositories'

export default class Stars extends Component {
    componentDidMount() {
        this.props.fetchStars()
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