import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { filterTags } from '../actions'

const queryString = require('query-string')

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = { q: '' }
    }

    handleSubmit(event) {
        event.preventDefault()
        const q = this.state.q
        this.props.filterTags(this.props.pathname, q)
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({ q: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="form-inline my-2 my-lg-0" >
                <input onChange={this.handleChange.bind(this)} value={this.state.q} className="form-control mr-sm-1 search-input" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { router: { location: { search = '?', pathname } } } = state
    const query = queryString.parse(search)
    const { q  } = query
    return { q, pathname }
}

const mapDispatchToProps = dispatch => ({
    filterTags: (pathname, q) => dispatch(push(`${pathname}?q=${q}`))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)