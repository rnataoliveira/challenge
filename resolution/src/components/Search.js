import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        );
    }
}