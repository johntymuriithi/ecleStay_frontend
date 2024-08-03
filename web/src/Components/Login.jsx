// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { setToken } from '../Services/authService';
import { setPic } from '../Services/authService';
import Loader from './Pages/Loader';

 const Login = () => {
  const location = useLocation();
  const notification = location.state?.notification;
  const [successMessage, setSuccessMessage] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { email, password };
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });


      if (!response.ok) {
        const responseData = await response.json();
        setError(responseData.message || 'Logged in successfully');
        console.error('Error:', responseData);
      }

      else {
        console.log('Login Successful');
        setSuccessMessage('Logged in Successfully');
          const responseData = await response.json();
        setToken(responseData.data.token);
        console.log( responseData.data.token)
        setPic(responseData.data.profiles.profilePicture);
          setTimeout(() => {
        navigate('/profile');
        setError('');
          }, 2000); 
      }
      

    } catch (error) {
      setForgotError('Network error');
      console.error('Network error:', error);
    }
    finally{
      setLoading(false);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { email: forgotEmail };
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    try {
      const response = await fetch('/api/user/resetpasswordlink', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setForgotError(errorData.message || 'Failed to reset password');
        console.error('Error:', errorData);
      } else {

        console.log('Password reset email sent successfully');
        setForgotSuccess('Password reset email sent successfully');
        setTimeout(() => { 
        navigate('/login');
        setForgotError('');
        setError('');
      }, 2000); 
      }
    } catch (error) {
      setForgotError('Network error');
      console.error('Network error:', error);
    }
   finally{
  setLoading(false);
}
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 md:pt-36">
       {notification && <p>{notification}</p>}
      <div
        className="w-full max-w-md p-8 rounded-lg shadow-lg"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/attractive-stylish-young-woman-khaki-dress-desert-traveling-africa-safari-wearing-hat-backpack-taking-photo-vintage-camera_285396-9161.jpg?t=st=1717150853~exp=1717154453~hmac=0c40db51cbe6f2691413ba14b8833d653525d5afce8bdbb9beb332223956a295&w=900)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {showForgotPassword ? (
          <div className="bg-white bg-opacity-80 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center text-blue-500">Forgot Password</h2>
            <form className="mt-8 space-y-6" onSubmit={handleForgotSubmit}>
              <div className="space-y-1">
                <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="forgot-email"
                  name="forgot-email"
                  type="email"
                  className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email address"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reset Password
                </button>
              </div>

              {loading && (
              <div className="mt-4 flex justify-center">
                <Loader />
              </div>
            )}
            </form>
            {forgotSuccess && <p className="mt-2 text-green-500 text-center">{forgotSuccess}</p>}
            {forgotError && <p className="mt-2 text-red-500 text-center">{forgotError}</p>}
            <div className="mt-6 text-center">
              <button className="text-blue-600" onClick={() => setShowForgotPassword(false)}>
                Back to Login
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white bg-opacity-80 p-8 rounded-lg">
            <h1 className="text-2xl font-bold text-center">EcleStay</h1>
            <p className="text-gray-600 text-center mt-4">Please enter your details.</p>
            
            <form onSubmit={handleLoginSubmit} className="mt-6">
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              {loading && (
              <div className="mt-4 flex justify-center">
                <Loader />
              </div>
            )}
              {error && <p className="text-red-500 text-center mt-4">{error}</p>}
              {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <input type="checkbox" id="remember" />
                  <label className="ml-2 text-gray-700" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <button type="button" className="text-blue-600" onClick={() => setShowForgotPassword(true)}>
                  Forgot Password?
                </button>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Sign in
                </button>
              </div>
              <div className="mt-6 text-center">
                <p>
                  Don't have an account?{' '}
                  <Link to="/sign-up" className="text-blue-600">
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>

    </div>
  );
};

export default Login;

      