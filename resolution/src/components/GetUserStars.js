import React from 'react';

import NavBar from './NavBar';

export default class GetUserStars extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <form className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className=" col input-group mb-2 mb-sm-0">
                                <div className="input-group-addon">github.com/</div>
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                            </div>
                            <div className="col ">
                                <button type="submit" className="btn btn-outline-primary mt-2">Get Repositories</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        );
    }
}