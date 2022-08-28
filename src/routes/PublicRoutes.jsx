import React from 'react'
import {Navigate} from 'react-router-dom'

const PublicRoutes = ({isAutentication, children})=>{
    return !isAutentication
    ? children
    : <Navigate to="/*"/>
}

export default PublicRoutes