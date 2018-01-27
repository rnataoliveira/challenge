import React, { Component } from 'react'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import 'react-router-modal/css/react-router-modal.css'
import { ModalRoute } from 'react-router-modal'

import Modal from './Modal'

class EditButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { router } = state
    return { ...props, ...router }
}

export default connect(mapStateToProps)(EditButton)