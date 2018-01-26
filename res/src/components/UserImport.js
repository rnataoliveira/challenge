import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fetchUserStars } from '../actions'

class UserImport extends Component {
  constructor(props) {
    super(props)
    
    this.state = { username: '' }
  }

  handleChange(e) {
    const username = e.target.value
    this.setState({ username })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onUserImportSubmit(this.state.username)
  }

  render() {
    if(this.props.isFetching)
      return <p>Fetching!</p>

    return (
      <div className="container">
          <div className="row justify-content-md-center mt-5">
              <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group input-group col-lg-10 col-md-10 col-sm-10">
                      <div className="col-12 input-group mb-sm-0">
                          <span className="input-group-addon">github.com/</span>
                          <input type="text" className="form-control" placeholder="Username" 
                            value={this.state.username} 
                            onChange={this.handleChange.bind(this)} />
                      </div>
                  </div>
                  <button type="submit" className="btn btn-outline-primary">Get Repositories</button>
              </form>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ isFetching }) => ({ isFetching })
const mapDispatchToProps = dispatch => ({ 
  onUserImportSubmit: username => dispatch(fetchUserStars(username)) 
})


export default connect(mapStateToProps, mapDispatchToProps)(UserImport)