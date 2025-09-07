import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import App from './App.jsx'
import Signup from './Signup/Signup.jsx'
import Login from './Login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/signup' element={ <Signup/> }/>
      <Route path='/login' element={ <Login/> } />
    </Routes>
  </BrowserRouter>
)
