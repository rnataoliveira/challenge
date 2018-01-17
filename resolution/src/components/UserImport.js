import NavBar from './NavBar';
import { fetchStars, changeRoute } from '../actions'

// import { push } from 'react-router-redux'
import React, { Component } from 'react'
// import { browserHistory as history, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class UserImport extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ username: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.fetchStars(`https://api.github.com/users/${this.state.username}/starred?sort=updated&direction=desc`)
    }

    render() {
        const layout = body => (
            <div>
                <NavBar />
                {body}
            </div>
        )

        if(this.props.isLoading)
            return layout(<p>Loading stars...</p>)

        if(this.props.hasError)
            return layout(<p>Error</p>)

        if(this.props.stars)
            return <p>Redirect</p>

        return (
            layout(
                <div className="container">
                    <div className="row justify-content-md-center mt-5">
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <div className="form-group input-group col-lg-10 col-md-10 col-sm-10">
                                <div className="col-12 input-group mb-sm-0">
                                    <div className="input-group-addon">github.com/</div>
                                    <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Get Repositories</button>
                        </form>
                    </div>
                </div>
            )
        );
    }
}

export default UserImport