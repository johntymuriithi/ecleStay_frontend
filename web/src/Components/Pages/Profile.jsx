// Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getCurrentUser } from '../../Services/authService';
import { fetchUserData } from '../../Services/apiService';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userToken = getCurrentUser();
    if (!userToken) {
      navigate('/login', { state: { from: location.pathname } });
      return;
    }

    try {
      const decodedToken = jwtDecode(userToken);
      console.log('Decoded token:', decodedToken);
      const userRoles = decodedToken.data.roles;

      // Check if the user has the 'user' role
      if (!userRoles.includes('user')) {
        setError('Access denied');
        setLoading(false);
        return;
      }

      // Extract user data from the token
      const userData = {
        sub: decodedToken.data.sub,
        first_name: decodedToken.data.first_name,
        email: decodedToken.data.email,
        roles: decodedToken.data.roles,
      };

      setUser(userData);

      // Fetch user-specific data
      fetchUserData()
        .then((data) => {
          setUser((prevUser) => ({ ...prevUser, orders: data.orders }));
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching user data:', err);
          setLoading(false);
        });

    } 
    catch (err) {
      console.error('Error decoding token:', err);
      setLoading(false);
    }
  }, [navigate, location.pathname]);

  const handleLogout = () => {
    clearToken();
    navigate('/login');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Welcome, {user.first_name}!</h2>

      <div className="flex">
        <div className="w-1/4 p-4">
          {/* Sidebar */}
          <ul>
            <li className="mb-4">
              <a href="#dashboard">Dashboard</a>
            </li>
            <li className="mb-4">
              <a href="#orders">Orders</a>
            </li>
            <li className="mb-4">
              <a href="#account-details">Account Details</a>
            </li>
            <li>
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Log Out</button>
            </li>
          </ul>
        </div>

        <div className="w-3/4 p-4">
          {/* Main Content */}
          <section id="dashboard" className="mb-8">
            <h3 className="text-xl font-semibold">Dashboard</h3>
            <p>Welcome to your dashboard, {user.first_name}.</p>
          </section>
          
          <section id="orders" className="mb-8">
            <h3 className="text-xl font-semibold">Orders</h3>
            <ul>
              {user.orders && user.orders.map((order) => (
                <li key={order.id}>{order.serviceName}</li>
              ))}
            </ul>
          </section>
          
          <section id="account-details">
            <h3 className="text-xl font-semibold">Account Details</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.sub}</p>
            <p>Roles: {user.roles.join(', ')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;







