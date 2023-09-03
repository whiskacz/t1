import React from 'react'

export default function UsersList( {users} ) {
  return (
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>email</th>
            </tr>
            </thead>
            <tbody data-testid='users'>
        {users.map((element) =>  (
                <tr key={element.name}>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                </tr>
            )
        )}      
            </tbody>
        </table>
  )
}
