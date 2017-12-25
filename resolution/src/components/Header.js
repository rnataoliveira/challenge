import React from 'react';

import Repositories from './Repositories';

export default class Header extends React.Component {
    render() {
        return (
            <div class="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name of Repository</th>
                            <th scope="col">Description</th>
                            <th scope="col">URL</th>
                            <th scope="col">HTTP</th>
                            <th scope="col">Language</th>
                            <th scope="col">Tags</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <Repositories />
                </table>
            </div>
        );
    }
}