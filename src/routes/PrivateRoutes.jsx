import React from 'react'
import {Navigate} from 'react-router-dom'


const PrivateRoutes = ({isAutentication, children})=>{
    return isAutentication
    ? children
    : <Navigate to="/" />
}

export default PrivateRoutes
