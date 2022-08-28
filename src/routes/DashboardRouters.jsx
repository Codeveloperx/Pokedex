  import React from 'react'
  import Home from '../pages/Home'
  import DetallePokemon from '../pages/DetallePokemon'
  import {Routes, Route} from 'react-router-dom'
  
  const DashboardRouters = ({isActive}) => {
    return (
        <>
        <Routes>
        <Route path='/home' element={<Home userActive={isActive}/>} />
        <Route path='/pokemon/:name' element={<DetallePokemon />} />
        </Routes>
      </>
    )
  }
  
  export default DashboardRouters