import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../../../api'

function Login() {
  const [user, setUser] = useState( { userName: '', email: '' })

  const changeHandler = (e) => {
    const {value, name} = e.target
    let newUser = {...user, [name]: value}
    setUser(
      newUser
    )
  }
 
  // const checkUser = () => {
  //   getUsers.then()
  // }
  

  return (
  <div className="signInForm">
    <div className="formBlock">
      Username:{' '}
      <div>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Username"
          name="userName"
        />
      </div>
    </div>
    <div className="formBlock">
      eMail:{' '}
      <div>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="email"
          name="email"
        />
      </div>
    </div>
    <Link className="sortButton" to="/home">
        Send it
     </Link>
  </div>)
}

export default Login
