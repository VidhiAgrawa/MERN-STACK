import React, { useState } from 'react'
import axios from "axios"

function Signup() {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const signupHandling = async () => {
        try {
        
            const res = await axios.post( "http://localhost:5000/user/signup", {
                username : username,
                password : password
            } )
            const token = res.data.token
            document.cookie = `token=${token}`
            alert("user created")
                
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
        <input type="text" 
        className="username" 
        placeholder='User..' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text" 
        className="password" 
        placeholder='pass..' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className="sign" onClick={signupHandling}>Signup</button>
    </>
  )
}

export default Signup