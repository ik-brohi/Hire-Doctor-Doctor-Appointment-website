import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/UseAdmin';
import { userContext } from '../context/AuthProvider';

const Dasboard = () => {

    // admin role
    const { user } = useContext(userContext);
    const [isAdmin] = useAdmin(user?.email);
    console.log("is admin", isAdmin);
    // end of admin role
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                {/* /dashboard/doctors */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>DashBoard</Link></li>
                        {isAdmin ? <>
                            <li><Link to='/dashboard/admin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/doctors'>Add Doctor</Link></li>
                        </> : ""}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dasboard;