import React, { Component } from 'react'
import Modal from './Modal'

import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class EditButton extends Component {
    constructor(props) {
        super(props)
        this.state = { view: { showModal: false } }
    }

    handleHideModal() {
        this.setState({ view: { showModal: false }})
    }

    handleShowModal(){
        this.setState({ view: { showModal: true } })
    }

   render() {
        return (
            <div>
                <Link className="btn btn-primary" to={(`${this.props.location.pathname}/${this.props.repo}`)}>Edit</Link>
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#tagEditor" onClick={this.handleShowModal.bind(this)}>Edit</button> */}
                <Modal handleHideModal={this.handleHideModal.bind(this)}
                                                            username={this.props.username} 
                                                            repo={this.props.repo}
                                                            tags={this.props.tags}/>
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { router } = state
    return { ...props, ...router }
}

export default connect(mapStateToProps)(EditButton)