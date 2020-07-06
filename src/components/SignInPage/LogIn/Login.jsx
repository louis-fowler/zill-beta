import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getUsers } from '../../../api'

function Login(props) {
  const [user, setUser] = useState( { userName: '', email: '' })
  const [auth, setAuth] = useState(false)

  const changeHandler = (e) => {
    const {value, name} = e.target
    let newUser = {...user, [name]: value}
    setUser(
      newUser
    )
  }
 
  const checkUser = () => {
    getUsers(user)
      .then(res => {
        if (res.text !== 'false') {
          setAuth(true)
          props.snagId(res.body[0].id)
        } else {
          alert('Not a user, please sign up')
        }
      })
  }

  

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
    <button className="sortButton" onClick={checkUser}>send it</button>
    {auth && <Redirect  to='/home' />}
    {/* <Link onClick={checkUser}  to="/home">
        Send it
     </Link> */}
  </div>)
}

export default Login
