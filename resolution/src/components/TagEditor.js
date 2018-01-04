import React from 'react'
import ReactDOM from 'react-dom'

import EditButton from './EditButton'
import Repositories from './Repositories'

export default class TagEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = { tags: [] }
    }

    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).modal('show')
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal)
        // Find entire repository
        // Using this.props.username and this.props.repository
        // Save data from the tag input in the localstorage
    }
    
    render() {
        return (
            <div className="modal fade" id="tagEditor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit tags for {this.props.username}/{this.props.repo}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}