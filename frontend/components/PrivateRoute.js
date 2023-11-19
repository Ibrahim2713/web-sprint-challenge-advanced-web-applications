import React from "react";
import { useNavigate,Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const navigate = useNavigate()

   if(localStorage.getItem('token') != null){
    return <Outlet />
   } else {
        return navigate('/')
   }

}

export default PrivateRoute

