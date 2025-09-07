import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'

function Login() {
    const [ loginUsername, setLoginUsername ] = useState("")
    const [ loginPassword, setLoginPassword ] = useState("")
    const navigate = useNavigate()
    const handlingLogin = async () => {
        try {
            // const res = await axios.get( `http://localhost:5000/user/login?username=${loginUsername}&password=${loginPassword}`) 
            
            const res = await axios.post( "http://localhost:5000/user/login", {
                username : loginUsername,
                password : loginPassword
            } )
            
            const token = res.data.token 
            if(token) return alert("user is authentic")
            else{
                navigate("/signup")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <input type="text" 
        className="username" 
        placeholder='User..' 
        value={loginUsername}
        onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input type="text" 
        className="password" 
        placeholder='pass..' 
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button className="sign" onClick={handlingLogin}>Login</button>
    </>
  )
}

export default Login