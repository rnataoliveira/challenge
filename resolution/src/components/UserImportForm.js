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
            <form className="container mt-5" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <div className=" col input-group mb-2 mb-sm-0">
                            <div className="input-group-addon">github.com/{this.state.username}</div>
                            <input type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-outline-primary mt-2">Get Repositories</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(UserImportForm)
