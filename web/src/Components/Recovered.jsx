import React from 'react';

const Recovered = () => {
  return (
    <div className="w-3/4 h-96 flex items-center justify-center ml-24 mt-10">
      <div className="bg-green-100 rounded-lg w-full shadow-lg max-w-md py-6 space-y-6">
        <h2 className="text-green-700 font-bold flex text-center justify-center text-2xl ml-4">Password Recovery Successful</h2>
        <p className="text-gray-700 text-center mt-4">Your password has been successfully reset. You can now log in with your new password.</p>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => window.location.href = '/login'}
            className="text-white px-4 py-2 font-medium bg-green-500 hover:bg-green-600 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 border-transparent"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recovered;
