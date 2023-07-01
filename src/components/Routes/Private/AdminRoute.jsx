import React, { useContext } from 'react';
import { userContext } from '../../context/AuthProvider';
import {Navigate, useLocation} from "react-router-dom";
import useAdmin from '../../../Hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const {user} = useContext(userContext);
    const [isAdmin,isLoading] = useAdmin(user?.email);
    const location = useLocation();
    if(isLoading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>;
    }

    if(!isAdmin){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    
    return (children);

};

export default AdminRoute;