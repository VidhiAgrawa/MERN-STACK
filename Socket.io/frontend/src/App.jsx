import { useState } from 'react'

import { useEffect } from 'react'
import {io} from "socket.io-client"

const socket = io("http://localhost:5000")

function App() {
  const [ all, setAll ] = useState([])
  const [ user, setUser ] = useState("")
  const [ msg, setMsg ] = useState("")
  
  useEffect( () => {
    socket.on( "connect", () => {
      socket.emit( "get message" )
    } )

    socket.on( "data", (data) => {
      setAll(data)
    } )

    socket.on( "new message", ( user, msg ) => {
      setAll( (prev) => [ ...prev, { user, msg } ] )
    } )
    
    return () => {
      socket.off("data");
      socket.off("new message");
    };
  }, [] )
  
  const handleClick = () => {
    if( !user || !msg ) return;
    socket.emit( "send message", user, msg )
    setMsg("")
      
  }

  return (
    <>
      <input type="text" 
      className="user" 
      placeholder='User...'
      value={user}
      onChange={(e) => setUser(e.target.value)} />

      <input type="text" 
      className="msg" 
      placeholder='Msg...'
      value={msg}
      onChange={(e) => setMsg(e.target.value)} />

      <button className="btn" onClick={handleClick}>Send</button>
      {
        all.map( (v) => (
          <>
            <p style={ { textAlign: v.user == user ? "right" : "left" } }>{v.user} : {v.msg}</p>
          </>
         )
)
      }
    </>
  )
}

export default App
