import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { tags: props.tags }
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).modal('show')
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal)
  }

  handleSubmit(event) {
    event.preventDefault()
    const tags = [...new Set(this.state.tags)]
    this.props.setTags(this.props.username, this.props.repo, tags)
  }

  handleChange(event) {
    this.setState({
      tags: event.target.value.split(',').map(tag => tag.trim())
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path={(`${this.props.location.pathname}/${this.props.repo}`)}>
          <div className="modal fade" id="tagEditor" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit tags for: {this.props.repo}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                          <input type="text" className="form-control" value={this.state.tags.join(',')} onChange={this.handleChange.bind(this)} />
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" className="btn btn-primary">Save</button>
                      </div>
                  </div>
              </div>
            </form>            
          </div>
        </Route>
      </Switch>
    )
  }
}


const mapStateToProps = (state, props) => {
  const { router } = state
  return { ...props, ...router }
}

export default connect(mapStateToProps)(Modal)