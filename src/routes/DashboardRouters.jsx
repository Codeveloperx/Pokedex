  import React from 'react'
  import Home from '../pages/Home'
  import DetallePokemon from '../pages/DetallePokemon'
  import {Routes, Route} from 'react-router-dom'
import Favorite from '../pages/Favorite'
import NavbarC from '../components/Navbar'
  
  const DashboardRouters = ({isActive}) => {
    return (
        <>
        <NavbarC isActive={isActive}/>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/favorites' element={<Favorite/>} />
            <Route path='/pokemon/:name' element={<DetallePokemon />} />
            <Route path='pokemon/:name/:action' element={<DetallePokemon/>} />
          </Routes>
      </>
    )
  }
  
  export default DashboardRouters