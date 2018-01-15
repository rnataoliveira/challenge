import React from 'react'
import ReactDOM from 'react-dom'

import EditButton from './EditButton'
import Repositories from './Repositories'

import { setTags } from '../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SetTags extends React.Component {
    constructor(props) {
        super(props)
        state = {
            tags: [] 
        }

        this.handleChange.bind(this)
        this.handleSubmit.bind(this)
        this.handleClick.bind(this)
    }

    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).modal('show')
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal)
    }
    
    handleChange(event) {
        this.setState({
          tags: event.target.value
        })
      }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatch(setTags(this.state.tags))
        this.setState({ tags: [] })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="modal fade" id="tagEditor" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit tags for {this.props.username}/{this.props.repo}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <input type="text" className="form-control" value={this.state.tags} onChange={this.handleChange} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>            
            </div>
        )
    }
}

export default connect()(SetTags)
