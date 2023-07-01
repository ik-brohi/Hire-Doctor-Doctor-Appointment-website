import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { userContext } from '../context/AuthProvider';

const DashBoardLayout = () => {
  const { user,logout } = useContext(userContext);
  const [userData,setUserData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getuser?email=${user?.email}`, {
      // jwt
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json()
      })
      .then(result => {
        setUserData(result)
        // setLoading(false)
      })
  }, [user?.email,logout])

  return (
    <div className="overflow-x-auto">
      <h1 className='font-bold text-2xl my-5'>DashBoard</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Slot</th>
            <th>Date</th>
            <th>Tretment Name</th>
          
          </tr>
        </thead>
        <tbody>
          {
            userData?.length > 0 && 
            userData?.map((user, index) =>
              <tr>
                <th>{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.slot}</td>
                <td>{user.date}</td>
                <td>{user.name}</td>
                {/* <button className="btn btn-outline btn-error">Delete</button>
                <button className="btn btn-outline btn-primary">Admin</button> */}
              </tr>)
          }

        </tbody>
      </table>
    </div>
  );
};

export default DashBoardLayout;