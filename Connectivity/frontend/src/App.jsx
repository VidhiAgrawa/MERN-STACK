import { useState } from 'react'
import './App.css'
import axios from "axios"
function App() {
  const submitFuncsign = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/signup", {
      username : e.target[0].value,
      password :e.target[1].value
    })
    alert( res.data )
  }
  const submitLog = async (e) => {
    e.preventDefault();
    const getaxios = await axios.get( 
      `http://localhost:5000/login?username=${e.target[0].value}&password=${e.target[1].value}` 
    )
    alert(getaxios.data)
    
  }
  return (
    <>
      <form onSubmit={submitFuncsign}>
        <input type="text" 
        placeholder='Enter username' 
        className="input1"
        name='username' 
        />
        <input type="text" 
        placeholder='Enter password' 
        className="input2" 
        name='password'/>
        <button className="sendbtn" type='submit'>signup</button>
      </form>

      <h3>login form here :</h3>

      <form onSubmit={submitLog}>
        <input type="text" 
        placeholder='Enter username' 
        className="input3"
        name='username' 
        />
        <input type="text" 
        placeholder='Enter password' 
        className="input4" 
        name='password'/>
        <button className="sendbtn2" type='submit'>login</button>
      </form>
    </>
  )
}

export default App
