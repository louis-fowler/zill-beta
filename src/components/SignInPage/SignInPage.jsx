import React, { useState } from 'react'

import Login from './LogIn/Login'
import Register from './Register/Register'

import './SignInPage.css'

function SignInPage() {
  const [visibility, setVisibility] = useState({
    page: '',
    register: 'normal',
    signIn: 'normal'
  })
  
  const clickHandler = (name, otherOne) => {
    // let newData = {...visibility, page: name}
    setVisibility({
      page: name,
      [name]: 'selected',
      [otherOne]: 'normal'
    })
  }
  
  return (
    <div className='signInContainer'>
      <h1>Welcome to Zill</h1>
      <div className="choiceContainer">
        <p onClick={() => clickHandler('signIn', 'register')} className={visibility.signIn}>Sign in</p>
        <p>or</p>
        <p onClick={() => clickHandler('register', 'signIn')} className={visibility.register}>Sign Up</p>
      </div>
      {visibility.page === 'register' ? 
      <Register /> 
      : visibility.page === 'signIn' ? 
      <Login />
      : null}
    </div>
  )
}

export default SignInPage
