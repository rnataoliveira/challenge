import React from 'react';

import NavBar from './NavBar';
import UserImportForm from './UserImportForm';

export default class UserImport extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <UserImportForm />
            </div>
        );
    }
}