import React, { Component } from 'react'

// import SearchInput, {createFilter} from 'react-search-input'

export default class SearchForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-1 search-input" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}