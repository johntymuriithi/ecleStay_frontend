// // src/components/Login.jsx

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Login = () => {
 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState('');
//   const [forgotError, setForgotError] = useState('');
//   const [forgotSuccess, setForgotSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     const data = { email, password };
//     const headers = {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     };

//     try {
//       const response = await fetch('/api/user/login', {
//         method: 'POST',
//         headers,
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError(errorData.message || 'An error occurred');
//         console.error('Error:', errorData);
//       } else {
//         const responseData = await response.json();
//         console.log('Success:', responseData);
//         // Redirect or handle login success
//         navigate('/booking');
//       }
//     } catch (error) {
//       setError('Network error');
//       console.error('Network error:', error);
//     }
//   };

//   const handleForgotSubmit = async (e) => {
//     e.preventDefault();
//     const data = { email: forgotEmail };
//     const headers = {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     };

//     try {
//       const response = await fetch('/api/user/resetpasswordlink', {
//         method: 'POST',
//         headers,
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setForgotError(errorData.message || 'Failed to reset password');
//         console.error('Error:', errorData);
//       } else {
//         console.log('Password reset email sent successfully');
//         setForgotSuccess('Password reset email sent successfully');
//         navigate('/resetPassword');
//         setForgotError('');
//       }
//     } catch (error) {
//       setForgotError('Network error');
//       console.error('Network error:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 rounded-lg shadow-lg"
//         style={{ 
//           backgroundImage: 'url(https://img.freepik.com/free-photo/attractive-stylish-young-woman-khaki-dress-desert-traveling-africa-safari-wearing-hat-backpack-taking-photo-vintage-camera_285396-9161.jpg?t=st=1717150853~exp=1717154453~hmac=0c40db51cbe6f2691413ba14b8833d653525d5afce8bdbb9beb332223956a295&w=900)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         {showForgotPassword ? (
//           <div className="bg-white bg-opacity-80 p-8 rounded-lg">
//             <h2 className="text-2xl font-bold text-center text-blue-500">Forgot Password</h2>
//             <form className="mt-8 space-y-6" onSubmit={handleForgotSubmit}>
//               <div className="space-y-1">
//                 <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   id="forgot-email"
//                   name="forgot-email"
//                   type="email"
//                   className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   placeholder="Email address"
//                   value={forgotEmail}
//                   onChange={(e) => setForgotEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Reset Password
//                 </button>
//               </div>
//             </form>
//             {forgotSuccess && <p className="mt-2 text-green-500 text-center">{forgotSuccess}</p>}
//             {forgotError && <p className="mt-2 text-red-500 text-center">{forgotError}</p>}
//             <div className="mt-6 text-center">
//               <button className="text-blue-600" onClick={() => setShowForgotPassword(false)}>Back to Login</button>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white bg-opacity-80 p-8 rounded-lg">
//             <h1 className="text-2xl font-bold text-center">EcleStay</h1>
//             <p className="text-gray-600 text-center mt-4">Please enter your details.</p>
//             <form onSubmit={handleLoginSubmit} className="mt-6">
//               <div className="mb-4">
//                 <label className="block text-lg font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-lg font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   placeholder="Enter your password"
//                 />
//               </div>
//               {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//               <div className="mt-4 flex items-center justify-between">
//                 <div>
//                   <input type="checkbox" id="remember" />
//                   <label className="ml-2 text-gray-700" htmlFor="remember">
//                     Remember me
//                   </label>
//                 </div>
//                 <button type="button" className="text-blue-600" onClick={() => setShowForgotPassword(true)}>Forgot Password?</button>
//               </div>
//               <div className="mt-6">
//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//                 >
//                   Sign in
//                 </button>
//               </div>
//               <div className="mt-6 flex justify-center">
//                 <button
//                   type="button"
//                   className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700 flex items-center justify-center"
//                 >
//                   <svg
//                     className="h-6 w-6 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     viewBox="0 0 48 48"
//                   >
//                     <g fill="none" fillRule="evenodd">
//                       <path
//                         d="M9.827 24.545h5.464v-2.182H9.827v2.182z"
//                         fill="#FBBC05"
//                       />
//                       <path
//                         d="M24.545 15.545c1.236 0 2.509.318 3.563.964l4.218-4.218c-2.146-1.746-4.8-2.837-7.782-2.837-6.8 0-12.182 4.837-14.727 11.09l4.727 4a7.963 7.963 0 019.091-8.727 8.1 8.1 0 013.454 1.454 8.074 8.074 0 012.909 6.545H24.545v2.182h12.545c0-1.127 0-2.182 0-3.309 0-3.164-1.364-5.618-3.418-7.327l-5.563 5.563A6.551 6.551 0 0024.545 15.545z"
//                         fill="#EA4335"
//                       />
//                       <path
//                         d="M14.545 27.273l-4.727 4.727c2.545 6.254 7.927 11.09 14.727 11.09 2.982 0 5.636-1.091 7.782-2.836l-4.218-4.218a7.963 7.963 0 01-9.091-8.727z"
//                         fill="#34A853"
//                       />
//                       <path
//                         d="M37.091 24.545v4.364h-4.545v4.364h-4.545v-4.364H23.091v4.364H18.546v-4.364H14v-4.364H9.455v4.364H4.91v-4.364H9.455v-4.364h4.545v4.364h4.545v-4.364h4.545v4.364h4.545v-4.364h4.545z"
//                         fill="#4285F4"
//                       />
//                     </g>
//                   </svg>
//                   Sign in with Google
//                 </button>
//               </div>
//             </form>
//             <div className="mt-6 text-center">

//             <p>Don't have an account? <Link to="/sign-up">SignUp</Link></p>

//               {/* <p className="text-gray-700">
//                 Don't have an account?{" "}
//                 <button className="text-blue-600">Sign up</button>
//               </p> */}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;


// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { setToken } from '../Services/authService';

 const Login = () => {
  const location = useLocation();
  const notification = location.state?.notification;
  // const Login = ({ onLoginSuccess }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
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
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred');
        console.error('Error:', errorData);
      } else {
        const responseData = await response.json();

         setToken(responseData.data.token);
        console.log('Success:', responseData);
        
        navigate('/booking');
      }
    } catch (error) {
      setError('Network error');
      console.error('Network error:', error);
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
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
        navigate('/resetPassword');
        setForgotError('');
      }
    } catch (error) {
      setForgotError('Network error');
      console.error('Network error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
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
              {error && <p className="text-red-500 text-center mt-4">{error}</p>}
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
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700 flex items-center justify-center"
                >
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 48 48"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M9.827 24.545h5.464v-2.182H9.827v2.182z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M24.545 15.545c1.236 0 2.509.318 3.563.964l4.218-4.218c-2.146-1.746-4.8-2.837-7.782-2.837-6.8 0-12.182 4.837-14.727 11.09l4.727 4a7.963 7.963 0 019.091-8.727 8.1 8.1 0 013.454 1.454 8.074 8.074 0 012.909 6.545H24.545v2.182h12.545c0-1.327-.182-2.6-.545-3.818H24.545v-5.455h8.182c-.818-2.073-2.2-3.709-3.818-4.545z"
                        fill="#EA4335"
                      />
                      <path
                        d="M9.818 24.545l-4.727-4a7.982 7.982 0 012.454-3.563 8.073 8.073 0 012.909-1.455 7.97 7.97 0 011.364-.091h.545v5.454h3.636v2.182h-3.636v2.182h5.454v5.454h-7.636a7.947 7.947 0 01-5.455-2.182z"
                        fill="#34A853"
                      />
                      <path
                        d="M9.818 24.545H4.364c-.236.727-.364 1.473-.364 2.182 0 1.545.364 2.964.91 4.182l4.91-4.182c-.091-.727-.182-1.545-.182-2.182h-.818z"
                        fill="#4285F4"
                      />
                    </g>
                  </svg>
                  <span>Sign in with Google</span>
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








