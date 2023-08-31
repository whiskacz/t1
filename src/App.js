import React, { useState } from 'react';
import UserForm from './UserForm';
import UsersList from './UsersList';

export default function App() {
    
    const [users, setAddUser] = useState([])

    const handleAddUser = (user) => {
        setAddUser([...users,user])
    }

    return (


        <div>
            <UserForm handleAddUser={handleAddUser} />
            <br />
            <UsersList users={users} />
        </div>
    )
}
