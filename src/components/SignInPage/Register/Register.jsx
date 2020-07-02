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
    <div className="signInForm">
      <div className="formBlock">
        Username:{' '}
        <div>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="formBlock">
        Email:{' '}
        <div>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="formBlock">
        Password (dontUse):{' '}
        <div>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="formBlock">
        Password again(dontUse):{' '}
        <div>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            onChange={handleInput}
          />
        </div>
      </div>
    </div>
  )
}

export default Register
