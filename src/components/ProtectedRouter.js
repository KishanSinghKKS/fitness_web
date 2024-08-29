import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

const ProtectedRouter = ({children}) => {
    const {isAuthenticated, loading} = useSelector((state)=>state.user);
   
   
  return (<>
    {isAuthenticated===false? <Navigate replace to='/admin/login'></Navigate>:children}
  </>
  )
}

export default ProtectedRouter
