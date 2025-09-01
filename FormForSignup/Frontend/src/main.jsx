import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import App from './App.jsx'
import Signup from './Signup/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/authorized" element={<App/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </BrowserRouter>,
)
