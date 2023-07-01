import React, { useContext } from 'react';
import { userContext } from '../../context/AuthProvider';
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(userContext);
    const location = useLocation();
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>;
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    
    return (children);

};

export default PrivateRoute;