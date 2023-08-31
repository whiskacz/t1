import React, { useState } from 'react'

export default function UserForm( {handleAddUser} ) {

    const [element, setElement] = useState({
        name: '',
        email: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddUser({ ...element })
        setElement({...element, name:'', email: ''})
    }

  return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input value={element.name} onChange={(event) => setElement({...element, name:event.target.value})}/>
            </div>
            <div>
                <label>Email</label>
                <input value={element.email} onChange={(event) => setElement({...element, email:event.target.value})}/>
            </div>
            <button>Add user</button>
        </form>
      
  )
}
