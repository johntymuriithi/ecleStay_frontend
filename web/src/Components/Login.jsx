// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 
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
        console.log('Success:', responseData);
        // Redirect or handle login success
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
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg"
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
              <button className="text-blue-600" onClick={() => setShowForgotPassword(false)}>Back to Login</button>
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
                <button type="button" className="text-blue-600" onClick={() => setShowForgotPassword(true)}>Forgot Password?</button>
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
                        d="M24.545 15.545c1.236 0 2.509.318 3.563.964l4.218-4.218c-2.146-1.746-4.8-2.837-7.782-2.837-6.8 0-12.182 4.837-14.727 11.09l4.727 4a7.963 7.963 0 019.091-8.727 8.1 8.1 0 013.454 1.454 8.074 8.074 0 012.909 6.545H24.545v2.182h12.545c0-1.127 0-2.182 0-3.309 0-3.164-1.364-5.618-3.418-7.327l-5.563 5.563A6.551 6.551 0 0024.545 15.545z"
                        fill="#EA4335"
                      />
                      <path
                        d="M14.545 27.273l-4.727 4.727c2.545 6.254 7.927 11.09 14.727 11.09 2.982 0 5.636-1.091 7.782-2.836l-4.218-4.218a7.963 7.963 0 01-9.091-8.727z"
                        fill="#34A853"
                      />
                      <path
                        d="M37.091 24.545v4.364h-4.545v4.364h-4.545v-4.364H23.091v4.364H18.546v-4.364H14v-4.364H9.455v4.364H4.91v-4.364H9.455v-4.364h4.545v4.364h4.545v-4.364h4.545v4.364h4.545v-4.364h4.545z"
                        fill="#4285F4"
                      />
                    </g>
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-700">
                Don't have an account?{" "}
                <button className="text-blue-600">Sign up</button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;




// import axios from 'axios';
// import {useState} from "react";
// import React from "react";
// import "../Styles/customStyles.css";

// const Login =() =>{
//   const[formData,setFormData]=useState({
//     emailAddress:"",
//     password:"",
//   });
//   const[error,setError]=useState({});
//   const handleChange = () =>{
//     setFormData({
//       ...formData,
//       [e.target.name]:e.target.value, 
//     })
   
//   }
//   const handleSubmit = async (e) =>{
//     e.preventDefault();
//     const ValidationErrors ={};
//     if(!formData.emailAddress.trim()){
//       validationErrors.emailAddress="email address is required"
//     }
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       validationErrors.emailAddress="email you've entered is not valid"

//     }
//     if(formData.trim()){
//       validationErrors.password="please input the password field"
//     }
//     else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,13}$/.test(formData.password)){
//       validationErrors.password='ensure your password contain at least 8 characters'
//     }
//     setError(validationErrors);
//     try {
//       const response = await axios.post('api/user/login', {
//           emailAddress: formData.emailAddress,
//           password: formData.password,
//     },{
//       headers: {
//         "ngrok-skip-browser-warning": '69420',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//     },
//     }
//   )  
//   if(response.data.status){
//     alert("Log in Successful");
//   }
//   else {
//     alert("Log in failed")
//   }
// }
// catch(error){
//   console.error("an error occurred", error)

// }
  // }


//   import React, { useState } from "react";

//   const Login = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       email: email,
//       password: password
//     };

//     const headers = {
//       'Content-Type': 'application/json',    // Commonly required
//       'Accept': 'application/json',
    
//     };

//     try {
//       const response = await fetch('/api/user/login', {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(data)
//       });

//       if (!response.ok) {
//         // Handle errors from the server
//         const errorData = await response.json();
//         setError(errorData.message || 'An error occurred');
//         console.error('Error:', errorData);
//       } else {
//         const responseData = await response.json();
//         console.log('Success:', responseData);
//         // Handle success (e.g., redirect, show a message, etc.)
//       }
//     } catch (error) {
//       // Handle network errors
//       setError('Network error');
//       console.error('Network error:', error);
//     }
//   };
  
  
//   return (
   
//     <div className="mx-auto w-full lg:w-1/3 mt-6 rounded-lg border-none outline-none overflow-hidden flex-col lg:flex-row max-h-auto 
//      min-h-64 flex border-4 border-blue-500 ">
//       {/* Welcome thingy to be here */}
//       <div className="hidden lg:flex items-center justify-center bg-blue-950 lg:w-1/4">
//         <div className="w-72 h-84 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce relative">
//           <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg">
//             <p className="text-white text-xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               Welcome to EcleStay
//             </p>
//           </div>
//         </div>
//         <div className="absolute bottom-5 text-white text-lg"></div>
//       </div>
//       {
//         // Log in details
//         <div className="bg-blue-100 p-8  w-full">
//           <h1 className="text-xl font-semibold">EcleStay</h1>
//           <p className="font-medium text-x1 text-gray-500 mt-4">
//             Please enter your details.
//           </p>
//           <form onSubmit={handleSubmit} className="mt-8">
//             <div>
//               <label className="text-lg font-medium">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border-2 border-blue-500 rounded-lg p-3 mt-1 bg-transparent"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="mt-4">
//               <label className="text-lg font-medium">Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border-2 border-blue-500 rounded-lg p-3 mt-1 bg-transparent"
//                 placeholder="Enter your password"
//               />
//             </div>
//             {error && <p className="text-red-500 mt-4">{error}</p>}
//             <div className="mt-8 flex justify-between items-center">
//               <div>
//                 <input type="checkbox" id="remember" />
//                 <label
//                   className="ml-2 font-medium text-base"
//                   htmlFor="remember"
//                 >
//                   Remember me
//                 </label>
//               </div>
//               <button
//                 type="submit"
//                 className="font-medium text-base text-blue-950"
//               >
//                 Forgot Password
//               </button>
//             </div>
//             <div className="mt-8 flex flex-col gap-y-4">
//               <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-3 
//               flex-items-center bg-blue-950 rounded-xl text-white text-lg font-bold border-2 border-blue-950">
//                 Sign in
//               </button>
//               <div className="flex items-center justify-center mt-3">
//                 <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex items-center bg-blue-950
//                  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-blue-900 
//                  focus:outline-none focus:ring-2 focus:ring-offset-2">
//                   <svg
//                     className="h-6 w-6 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     width="800px"
//                     height="800px"
//                     viewBox="0 0 48 48"
//                     version="1.1"
//                   >
//                     <title>Google-color</title>
//                     <desc>Created with Sketch.</desc>
//                     <defs></defs>
//                     <g
//                       id="Icons"
//                       stroke="none"
//                       strokeWidth="1"
//                       fill="none"
//                       fillRule="evenodd"
//                     >
//                       <g
//                         id="Color-"
//                         transform="translate(-401.000000, -860.000000)"
//                       >
//                         <g id="Google" transform="translate(401.000000, 860.000000)">
//                           <path
//                             d="M9.82727273,24.5454545 C9.82727273,23.8181818 9.75454545,23.0909091 9.67272727,22.3636364 L4.09090909,22.3636364 L4.09090909,24.5454545 L9.82727273,24.5454545 Z"
//                             id="Shape"
//                             fill="#FBBC05"
//                           ></path>
//                           <path
//                             d="M24.5454545,15.5454545 C25.7818182,15.5454545 27.0545455,15.8636364 28.1090909,16.5090909 L32.3272727,12.2909091 C30.1818182,10.5454545 27.5272727,9.45454545 24.5454545,9.45454545 C17.7454545,9.45454545 12.3636364,14.2909091 9.81818182,20.5454545 L14.5454545,24.5454545 C15.6181818,20.4181818 19.8727273,17.4545455 24.5454545,17.4545455 C27.5090909,17.4545455 29.9272727,18.9090909 31.4545455,21.2363636 L24.5454545,21.2363636 L24.5454545,24.5454545 L37.0909091,24.5454545 C37.0909091,23.4181818 37.0909091,22.3636364 37.0909091,21.2363636 C37.0909091,18.0727273 35.7272727,15.6181818 33.6727273,13.9090909 L28.1090909,18.6181818 C27.2727273,16.9818182 25.7818182,15.5454545 24.5454545,15.5454545 Z"
//                             id="Shape"
//                             fill="#EA4335"
//                           ></path>
//                           <path
//                             d="M14.5454545,27.2727273 L9.81818182,31.2727273 C12.3636364,37.5272727 17.7454545,42.3636364 24.5454545,42.3636364 C27.5272727,42.3636364 30.1818182,41.2727273 32.3272727,39.5272727 L28.1090909,35.3090909 C27.0545455,35.9545455 25.7818182,36.2727273 24.5454545,36.2727273 C19.8727273,36.2727273 15.6181818,33.3090909 14.5454545,29.1818182 L9.81818182,33.2727273 L9.81818182,29.1818182 L14.5454545,27.2727273 Z"
//                             id="Shape"
//                             fill="#34A853"
//                           ></path>
//                           <path
//                             d="M37.0909091,24.5454545 L37.0909091,28.9090909 L32.5454545,28.9090909 L32.5454545,24.5454545 L28.1090909,24.5454545 L28.1090909,28.9090909 L23.0909091,28.9090909 L23.0909091,24.5454545 L18.6545455,24.5454545 L18.6545455,28.9090909 L14.5454545,28.9090909 L14.5454545,24.5454545 L9.81818182,24.5454545 L9.81818182,29.1818182 L14.5454545,33.2727273 L14.5454545,29.1818182 L18.6545455,29.1818182 L18.6545455,33.2727273 L23.0909091,33.2727273 L23.0909091,29.1818182 L28.1090909,29.1818182 L28.1090909,33.2727273 L32.5454545,33.2727273 L32.5454545,29.1818182 L37.0909091,29.1818182 L37.0909091,33.2727273 L41.0909091,33.2727273 L41.0909091,28.9090909 L37.0909091,28.9090909 L37.0909091,24.5454545 Z"
//                             id="Shape"
//                             fill="#4285F4"
//                           ></path>
//                         </g>
//                       </g>
//                     </g>
//                   </svg>
//                   Sign in with Google
//                 </button>
//               </div>
//             </div>
//           </form>
//           <div className="mt-8 flex justify-center items-center">
//             <p className="font-medium text-base">Don't have an account?</p>
//             <button className="text-blue-950 text-base font-medium ml-2">
//               Sign up
//             </button>
//           </div>
//         </div>
//       }
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import Signup from './Signup'; // Import your Signup component

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState('');
//   const [forgotError, setForgotError] = useState('');
//   const [forgotSuccess, setForgotSuccess] = useState('');

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
//         setForgotError('');
//       }
//     } catch (error) {
//       setForgotError('Network error');
//       console.error('Network error:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
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
//                 <Link to="/signup" className="text-blue-600">Sign up</Link>
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
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;















