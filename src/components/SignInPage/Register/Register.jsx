import React, { useState } from 'react'

function Register() {
  const [newUser, setNewUser] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const handleInput = e => {
    const addUser = { ...newUser }
    const { value, name } = e.target
    addUser[name] = value
    setNewUser(addUser)
  }
  
  

  return (
    <div>
      <p>
        Username:{' '}
        <input
          type="text"
          placeholder="Username"
          name="userName"
          onChange={handleInput}
        />
      </p>
      <p>
        Email:{' '}
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInput}
        />
      </p>
      <p>
        Password (dontUse):{' '}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
        />
      </p>
    </div>
  )
}

export default Register
