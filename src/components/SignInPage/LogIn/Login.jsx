import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState( { userName: '', password: '' })
  return (
  <div className="signInForm">
    <div className="formBlock">
      Username:{' '}
      <div>
        <input
          type="text"
          placeholder="Username"
          name="userName"
          // onChange={handleInput}
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
          // onChange={handleInput}
        />
      </div>
    </div>
    <Link className="sortButton" to="/home">
        Send it
     </Link>
  </div>)
}

export default Login
