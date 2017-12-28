import React from 'react';
import { browserHistory as history, withRouter } from 'react-router-dom';

import Repositories from './Repositories';


class UserImportForm extends React.Component {
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

        //Save: Repository ID, Name, description, URL HTTP e language;
        fetch(`https://api.github.com/users/${this.state.username}/starred?sort=updated&direction=desc`)
            .then(response => response.json())
            .then(repositories => {
                return repositories.map(repository => {
                    return { 
                        id: repository.id,
                        name: repository.name,
                        description: repository.description,
                        url: repository.url,
                        language: repository.language
                    }
                })
            })
            .then(repositories => {
                const username = this.state.username
                const data = { stars: repositories }
                localStorage.setItem(username, JSON.stringify(data))
                this.props.history.push(`${this.state.username}/stars`)
            })            
    }

    render() {
        return (
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
        );
    }
}

export default withRouter(UserImportForm)
