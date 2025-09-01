import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{ BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import App from './App.jsx'
import Login from './Login/Login.jsx'
import Signup from './Signup/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/authorized" element={<App/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
)
