import React from "react";
import { Navigate,Outlet} from "react-router-dom";

const PrivateRoute = () => {
    

   if(localStorage.getItem('token') != null){
    return <Outlet />
   } else {
        return <Navigate to="/" /> 
   }

}

export default PrivateRoute

