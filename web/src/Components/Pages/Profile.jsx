import React, { useEffect, useState } from 'react';
import { useNavigate , Link, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getCurrentUser } from '../../Services/authService';
import { clearToken } from '../../Services/authService';
import { clearPic } from '../../Services/authService';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const userToken = getCurrentUser();
    
    if (!userToken) {
      navigate('/login');
      return;
    }
  
  try {
    const decodedToken = jwtDecode(userToken);
    const userRoles = decodedToken.data.roles;
    console.log('User roles:', userRoles);
    
    const allowedRoles = ['admin', 'tourGuide', 'host','guest'];
    if (!userRoles.some(role => allowedRoles.includes(role))) {
      setError('Access denied. You do not have the required permissions.');
      setLoading(false);
      return;
    }

    const userData = {
      sub: decodedToken.data.sub,
      first_name: decodedToken.data.first_name,
      email: decodedToken.data.email,
      roles: decodedToken.data.roles,
    };
    console.log(userData)
    setUser(userData);
  
    } catch (err) {
       console.error('Error decoding token:', err);
       setError('An error occurred while processing your request.');
       setLoading(false);
      }
    
    }, [navigate, location.pathname]);
    const handleLogout = () => {
    clearToken();
    clearPic();
    navigate('/login');
    };
    
    
    if (error) {
      return <p>{error}</p>;
    }
    
    if (!user) {
      return <p>No user data available</p>;
    }
    console.log('User data:', user);
   
    return (
      <div className=" bg-white h-screen w-full md:pt-40 pt-28">       
          <div>
             <h2 className="text-2xl  font-bold">Welcome, {user.first_name}!</h2>
             <p className='text-gray-600'>From your dashboard, you can view your:</p>
             <h2 className='text-gray-600'>account details, your orders</h2>
          </div>
         
         <div className=" flex-col  flex justify-start md:justify-between  space-x-10 px-20 mt-16">
          <div className="flex space-x-9 mb-8">
            <Link to="/profile/orders" className="text-xl font-semibold">Orders</Link>
            <Link to="/profile/account" className="text-xl font-semibold">Account Details</Link>
             <Link to="/profile/pic" className="text-xl font-semibold">Update Profile</Link>
          </div>
         <div>
          <button onClick={handleLogout} className="bg-red-500 mt-9 flex justify-start text-white px-4 py-2 rounded">Log Out</button>
         </div>
             <div className="w-3/4 p-4">
               <Outlet context={{ user }} />
               {/* <Outlet/>  */}

              </div>
          </div>
      </div>
  );
};


export default Profile;


      // fetchUserData()
      //   .then((data) => {
      //     setUser((prevUser) => ({ ...prevUser, orders: data.Bookings }));
      //     setLoading(false);
      //   })
      //   .catch((err) => {
      //     console.error('Error fetching user data:', err.message);
      //     setError('Failed to fetch user data');
      //     setLoading(false);
      //   });

        // console.log('State:', { loading, error, user });

  //   if (loading) {
  //   return <p>Loading...</p>;
  // }