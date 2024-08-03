
import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../../Services/authService';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; 
import { FaRegUserCircle } from 'react-icons/fa'
import { getUserPic } from '../../Services/authService';

function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const userToken = getCurrentUser();
    if (!userToken) {
      navigate('/login');
      return;
    }

    try {
      // Decode the token
      const decodedToken = jwtDecode(userToken);
      console.log(decodedToken)
      setUser(decodedToken);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }, [navigate]); 

  const handleProfileUpdate = () => {
    fetchUserData();
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pt-36 bg-white h-screen w-full mr-20'>
      <h2 className="text-2xl font-bold mb-4">Account Details</h2>
      <div className="flex items-center justify-center mb-6 ">

           {getUserPic() ? (<img
          className="w-24 h-24 bg-white rounded-full mr-6"
          src={ getUserPic() }
          alt="user pic"
          />) :(<FaRegUserCircle />)} 
          </div>
        
      <div className="space-y-2">
        <p><strong>Email:</strong> {user.data.email}</p>
        <p><strong>First Name:</strong> {user.data.first_name}</p>
        <p><strong>Last Name:</strong> {user.data.second_name}</p>
        <p><strong>Phone:</strong> {user.data.phone}</p>
        <p><strong>Roles:</strong> {user.data.roles }</p>
      </div>
      
    </div>
  );
}

export default Account;