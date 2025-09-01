import React from 'react'

function Login() {
  return (
    <>
        <input type="text" className="login-username" placeholder='Username'/>
        <input type="text" className="login-password" placeholder='Password'/>
        <button className="loginbtn">Login</button>
    </>
  )
}

export default Login