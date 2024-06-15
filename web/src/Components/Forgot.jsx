

import React, { useState } from 'react';
import axios from 'axios';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://e8c4-41-90-101-26.ngrok-free.app/counties', {
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420",
           'Access-Control-Allow-Origin': '*',
        }
          
        
      });

      // Handle successful response
      console.log('Password reset email sent successfully', response.data);
      setSuccess('Password reset email sent successfully');
      setError('');
    } catch (error) {
      if (error.response) {
        // Backend returned a response with an error status
        console.error('Error response:', error.response);
        setError(`Error: ${error.response.data.message || 'Failed to reset password'}`);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Error request:', error.request);
        setError('No response from server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error message:', error.message);
        setError(`Error: ${error.message}`);
      }
      setSuccess('');
    }
  };

  return (
    <div className="w-3/4 h-96 flex items-center justify-center mt-10 ml-24">
      <div className="w-full max-w-md p-8 space-y-6 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-500">Forgot Password</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        </form>
        {success && <p className="mt-2 text-green-500 text-center">{success}</p>}
        {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Forgot;











