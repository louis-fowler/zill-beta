import React, { useState } from 'react'

import Login from './LogIn/Login'
import Register from './Register/Register'

function SignInPage() {
  return (
    <div>
      <h1>Welcome to Zill</h1>
      <p>Sign in</p>
      <p>Sign Up</p>
      <Register />
    </div>
  )
}

export default SignInPage
