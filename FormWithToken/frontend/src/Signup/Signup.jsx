import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'

function Signup() {
  const navigate = useNavigate()
  const signupHandlePage = async () =>{
    const res = await axios.post( "http://localhost:5000/user/signup", {
      username : document.querySelector(".username").value,
      password : document.querySelector(".password").value
    } )
    const token = res.data.token
    document.cookie = `Token=${token}`
    alert("user signed up")
    navigate("/authorized")
  }
  return (
    <>
        <input type="text" className="username" placeholder='Username'/>
        <input type="text" className="password" placeholder='Password'/>
        <button className="signupbtn" onClick={signupHandlePage}>Signup</button>
    </>
  )
}

export default Signup