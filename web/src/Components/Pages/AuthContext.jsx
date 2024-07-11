// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthContext = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Example: Check if token exists

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthContext;

