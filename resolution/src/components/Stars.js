import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

import EditButton from './EditButton'
import Modal from './Modal'

const Stars = ({ repos = [], username }) => (
  <div className="container">
    <Route path="/:username/stars/:repoId" component={Modal} />
    <table className="mt-5">
      <thead>
          <tr>
              <th scope="col">ID</th>
              <th scope="col">Name of Repository</th>
              <th scope="col">Description</th>
              <th scope="col">URL</th>
              <th scope="col">Language</th>
              <th scope="col">Tags</th>
              <th scope="col"></th>
          </tr>
      </thead>
      <tbody>
        {repos.map(repo => (
          <tr key={repo.id} className="mt-5">
            <td>{repo.id}</td>
            <td>{repo.name}</td>
            <td>{repo.description}</td>
            <td>{repo.url}</td>
            <td>{repo.language}</td>
            <td>{repo.tags}</td>
            <td>
              <Link className="btn btn-primary" to={(`/${username}/stars/${repo.id}`)}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const mapStateToProps = (state, props) => {
  const { root: { stars } } = state
  const { match: { params: { username } } } = props
  
  const userStars = stars.filter(star => star.username === username)[0] || {}
  return { ...props, ...userStars }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Stars)