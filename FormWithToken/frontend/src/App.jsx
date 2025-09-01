import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router'
import axios from 'axios'

function App() {
  const navigate = useNavigate()
  useEffect( () => {
    const verifyingToken = async () => {
      const token = document.cookie.split("Token=")[1];
      if( !token ) return navigate("/signup");
      console.log(token)
      const axiosget = await axios.get( "http://localhost:5000/verify", {
        headers : {
          token : token
        }
      } )
      console.log(axiosget.data)
      if( !axiosget.data ) return navigate("/signup")
    }
    verifyingToken()
  }, [] )

  return (
    <>
      <h1>Welcome to our Authorized Page</h1>
      
    </>
  )
}

export default App
