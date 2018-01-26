import React, { Component } from 'react'
import Modal from './Modal'

export default class EditButton extends Component {

    constructor(props) {
        super(props)
        this.state = {view: {showModal: false}}

        this.handleHideModal = this.handleHideModal.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
    }

    handleHideModal(){
        this.setState({ view: {showModal: false }})
    }

    handleShowModal(){
        this.setState({ view: { showModal: true } })
    }

   render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#tagEditor" onClick={this.handleShowModal}>Edit</button>
                { this.state.view.showModal ? <Modal handleHideModal={this.handleHideModal}
                                                            username={this.props.username} 
                                                            repo={this.props.repo}/> : null }
            </div>
        )
    }
}