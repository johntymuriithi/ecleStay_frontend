
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Reset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [tokenn] = useSearchParams();
  const token = tokenn.get("token");
  console.log(token)

  const validatePassword = (password) => {
    const minLength = 8;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    return password.length >= minLength && hasLetters && hasNumbers;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== password) {
      setError('Passwords do not match');
      return;
    }

    if (!validatePassword(newPassword)) {
      setError('Password must be at least 8 characters long and include both numbers and letters');
      return;
    }


    const data = { email, password };

    try {
      const response = await fetch(`/api/user/resetpassword?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response)
      if (!response.ok) {
        console.log((await response.json()).message)
      }
      else
      setMessage('Password reset successfully');
      setTimeout(() => {
        navigate('/login');
        setError('');
          }, 2000); 

    } catch (error) {
      setError('Failed to reset password. Please try again.');
      setMessage('');
    }
  };

  return (

    <div className='md:pt-52 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50'>
  <div className='bg-white rounded-lg w-full max-w-md shadow-2xl p-8 space-y-8'>
    <h2 className='text-3xl font-extrabold text-center text-gray-900'>Reset Password</h2>
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className='space-y-6'>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            id="email"
            name="email"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            placeholder='Enter your email address'
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword" className='block text-sm font-medium text-gray-700'>New Password</label>
          <input
            id="newPassword"
            name="newPassword"
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            placeholder='Enter new password'
            required
          />
        </div>
        <div>
          <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Confirm Password</label>
          <input
            id="password"
            name="password"
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            placeholder='Confirm your password'
            required
          />
        </div>
      </div>
      {error && <p className='text-sm text-red-600 mt-2'>{error}</p>}
      {message && <p className='text-sm text-green-600 mt-2'>{message}</p>}
      <div>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
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
//   const [password, setConfirmPassword] = useState('');
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
