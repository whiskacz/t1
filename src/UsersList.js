import React from 'react'

export default function UsersList( {users} ) {
  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>email</th>
            </tr>
            </thead>
            <tbody>
        {users.map((element) =>  (
                <tr key={element.name}>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                </tr>
            )
        )}      
            </tbody>
        </table>

    </div>
  )
}
