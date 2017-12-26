import React from 'react';

import withRouter from 'react-router';

export default class UserImport extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ username: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username);
        event.preventDefault();
    }

    render() {
        return (
            <form className="container mt-5" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <div className=" col input-group mb-2 mb-sm-0">
                            <div className="input-group-addon">github.com/</div>
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