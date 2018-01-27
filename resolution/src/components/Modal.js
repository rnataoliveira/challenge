import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { saveTags } from '../actions'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { tags: props.tags || [] }
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).modal('show')
    const closeModal = () => this.props.closeModalTags(this.props.username)
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', closeModal)
  }

  handleSubmit(event) {
    event.preventDefault()
    const tags = [...new Set(this.state.tags)]
    this.props.saveTags(this.props.username, this.props.repoId, tags)
  }

  handleChange(event) {
    this.setState({
      tags: event.target.value.split(',').map(tag => tag.trim())
    })
  }

  render() {
    return (
          <div className="modal fade" id="tagEditor" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit tags for: {this.props.repoName}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                          <input type="text" className="form-control" value={this.state.tags.join(',')} onChange={this.handleChange.bind(this)} />
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" className="btn btn-primary" >Save</button>
                      </div>
                  </div>
              </div>
            </form>            
          </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { match: { params: { username, repoId } } } = props
  const { root: { stars } } = state

  const userStars = stars.filter(star => star.username === username)[0]
  const userRepo = userStars && userStars.repos.filter(repo => repo.id === Number(repoId))[0]
  const currentTags = userRepo && userRepo.tags || []
  const repo = userRepo && userRepo.name
  return { username, repoId, tags: currentTags, repoName: repo }
}

const mapDispatchToProps = dispatch => ({
  closeModalTags: username => dispatch(push(`/${username}/stars`)),
  saveTags: (username, repoId, tags) => dispatch(saveTags(username, repoId, tags))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)