import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetallePokemon from '../pages/DetallePokemon'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/pokemon/:name' element={<DetallePokemon/> } />
        </Routes>
    </Router>
  )
}

export default AppRoutes