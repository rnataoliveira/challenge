import React from 'react'

import SetTags from './SetTags'
import Repositories from './Repositories'

export default class EditButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {view: {showModal: false}}

        this.handleHideModal = this.handleHideModal.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
    }

    handleHideModal(){
        this.setState({view: {showModal: false}})
    }

    handleShowModal(){
        this.setState({ view: { showModal: true } })
    }
   render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#tagEditor" onClick={this.handleShowModal}>Edit</button>
                { this.state.view.showModal ? <TagEditor handleHideModal={this.handleHideModal}
                                                            username={this.props.username} 
                                                            repo={this.props.repo}/> : null }
            </div>
        )
    }
}