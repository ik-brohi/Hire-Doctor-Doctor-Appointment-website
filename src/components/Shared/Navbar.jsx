import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(userContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout().then(() => {
      navigate('/login');
    })
  }

  const menubar =
    <>
      <li><Link to='/'>Home</Link></li>
      {
        user?<li><Link to='/dashboard'>Dasboard</Link></li>:""
      }
      <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/review'>Review</Link></li>
      <li><Link>Contact Us</Link></li>
      {
        user?.email ?
          <div className='flex gap-2'>
            <div className="relative flex-shrink-0">
              <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
              <img src={user?.photoURL} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
            </div>
            <li><Link onClick={handleLogout}>LogOut</Link></li>
          </div>
          :
          <div className='flex'>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </div>
      }
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menubar}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">Doctor Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal p-0">
          {
            menubar
          }
        </ul>

      </div>
      
      <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden navbar-end">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
  );
};

export default Navbar;