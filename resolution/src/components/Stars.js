import React, { Component } from 'react'

import Repositories from './Repositories'

export default class Stars extends Component {
    componentDidMount() {
        this.props.fetchStars()
    }

    render() {
        return (
            <div className='container'>
                <Repositories username={this.props.match.params.username} />
            </div>
        );
    }
}