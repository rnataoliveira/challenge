import React from 'react';

export default  class Header extends React.Component {
    render() {
        return (
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
        );
    }
}