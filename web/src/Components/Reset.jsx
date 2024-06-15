

import React, { useState } from 'react';
import axios from 'axios';

const Reset = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // API call to reset the password
      const response = await axios.post('https://af8f-41-90-101-26.ngrok-free.app/user/resetpasswordlink', {
        email,
        newPassword,
      });

      setMessage('Password reset successfully');
      setError('');
    } catch (error) {
      setError('Failed to reset password. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className='w-3/4 h-96 flex items-center justify-center ml-24 mt-10 overflow-hidden'>
      <div className='bg-blue-100 rounded-lg w-full shadow-lg max-w-md py-6 space-y-6 '>
        <h2 className='text-blue font-bold flex text-center justify-center text-2xl ml'>Reset Password</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className='space-y-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-4">Email</label>
            <input 
              id="email"
              name="email"
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full ml-4 px-3 py-2 text-gray-700 placeholder-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500
               focus:border-blue-500 text-sm overflow-hidden mr-4'
              placeholder='Email address'
              required
            />
            <label htmlFor="newPassword" className='ml-4 block text-sm font-medium text-gray-700'>New Password</label>
            <input
              id="newPassword"
              name="newPassword"
              type='password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className='w-full ml-4 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='New password'
              required
            />
            <label htmlFor="confirmPassword" className='ml-4 block text-sm font-medium text-gray-700'>Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full ml-4 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Confirm password'
              required
            />
          </div>
          {error && <p className='text-red-500 mt-4'>{error}</p>}
          {message && <p className='text-green-500 mt-4'>{message}</p>}
          <div>
            <button
              type='submit'
              className='w-full text-white px-4 py-2 font-medium bg-blue-500 hover:bg-blue-600 text-sm rounded-md overflow-hidden 
              focus:outline-none focus:ring-2 focus:ring-blue-500 border-transparent'
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

// const Reset = () => {
//   const query = useQuery();
//   const [email, setEmail] = useState(query.get('email') || '');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('https://e3b9-41-90-101-26.ngrok-free.app/user/resetpasswordlink', {
//         email,
//         newPassword,
//       });
//       setMessage('Password reset successfully');
//       setError('');
//     } catch (error) {
//       setError('Failed to reset password. Please try again.');
//       setMessage('');
//     }
//   };

//   return (
//     <div className='w-3/4 h-96 flex items-center justify-center ml-24 mt-10 overflow-hidden'>
//       <div className='bg-blue-100 rounded-lg w-full shadow-lg max-w-md py-6 space-y-6 '>
//         <h2 className='text-blue font-bold flex text-center justify-center text-2xl ml'>Reset Password</h2>
//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           <div className='space-y-1'>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-4">Email</label>
//             <input 
//               id="email"
//               name="email"
//               type='email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className='w-full ml-4 px-3 py-2 text-gray-700 placeholder-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500
//                focus:border-blue-500 text-sm overflow-hidden mr-4'
//               placeholder='Email address'
//               required
//             />
//             <label htmlFor="newPassword" className='ml-4 block text-sm font-medium text-gray-700'>New Password</label>
//             <input
//               id="newPassword"
//               name="newPassword"
//               type='password'
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               className='w-full ml-4 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//               placeholder='New password'
//               required
//             />
//             <label htmlFor="confirmPassword" className='ml-4 block text-sm font-medium text-gray-700'>Confirm Password</label>
//             <input
//               id="confirmPassword"
//               name="confirmPassword"
//               type='password'
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className='w-full ml-4 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//               placeholder='Confirm password'
//               required
//             />
//           </div>
//           {error && <p className='text-red-500 mt-4'>{error}</p>}
//           {message && <p className='text-green-500 mt-4'>{message}</p>}
//           <div>
//             <button
//               type='submit'
//               className='w-full text-white px-4 py-2 font-medium bg-blue-500 hover:bg-blue-600 text-sm rounded-md overflow-hidden 
//               focus:outline-none focus:ring-2 focus:ring-blue-500 border-transparent'
//             >
//               Reset Password
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Reset;
