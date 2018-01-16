import React from 'react'

import Header from './Header'
import EditButton from './EditButton'
import SetTags from './SetTags'

export default class Repositories extends React.Component {
    constructor(props) {
        super(props)
          this.state = { repositories: [] }
    }

    componentDidMount() {
        const username = this.props.username
        const { stars } = JSON.parse(localStorage.getItem(username))
        this.setState({
            repositories: stars
        })
    }

    render() {
        const rows = this.state.repositories.map(repository => {
            return (
                <tr key={repository.id}>
                    <td>{repository.id}</td>
                    <td>{repository.name}</td>
                    <td>{repository.description}</td>
                    <td>{repository.url}</td>
                    <td>{repository.language}</td>
                    <td>
                        <SetTags />
                    </td>
                    <td>
                        <EditButton username={this.props.username}
                                    repo={repository.name}  />
                    </td>
                </tr>
            )
        })
        return (
            <table  className="table">
                <Header />
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}