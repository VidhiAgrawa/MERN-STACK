import React from 'react'

function Signup() {
  return (
    <>
        <input type="text" className="username" placeholder='Username'/>
        <input type="text" className="password" placeholder='Password'/>
        <button className="signupbtn">Signup</button>
    </>
  )
}

export default Signup