import React from 'react'; 
import { useState } from 'react';
import axios from 'axios';
import "../Styles/customStyles.css";
// import './index.css';


const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};

        // First name validation
        if (!formData.firstName.trim()) {
            validationErrors.firstName = 'First Name is required';
        } else if (formData.firstName.length < 3) {
            validationErrors.firstName = 'Enter at least 3 characters';
        }

        // Second name validation
        if (!formData.secondName.trim()) {
            validationErrors.secondName = 'Second Name is required';
        } else if (formData.secondName.length < 3) {
            validationErrors.secondName = 'Enter at least 3 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            validationErrors.email = 'Email is not valid';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            validationErrors.phone = 'Phone Number is required';
        } else if (!/^\+[1-9]{1}[0-9]{1,14}$/.test(formData.phone)) {
            validationErrors.phone = 'Enter correct phone number format (e.g., +1234567890)';
        }

        // Password validation
        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required';
        } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,13}$/.test(formData.password)) {
            validationErrors.password = 'Password must be 8-13 characters long and include at least one uppercase letter, one lowercase letter, and one number';
        }

        // Confirm password validation
        if (!formData.confirmPassword.trim()) {
            validationErrors.confirmPassword = 'Confirm your Password';
        } else if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(validationErrors);

        // Check if there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('api/user/signup', {
                    first_name: formData.firstName,
                    second_name: formData.secondName,
                    email: formData.email,
                    phone: formData.phone,
                    password: formData.password,
                },{
                    headers: {
                        "ngrok-skip-browser-warning": '69420',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            );

                if (response.data.status) {
                    alert('Signup successful');
                } else {
                    alert('Signup failed: ' + response.data.error);
                }
            } catch (error) {
                console.error('Signup error:', error);
            }
        }
    };

    return (
        <section className='md:flex md:items-center md:justify-center bg-white flex flex-col items-center md:h-screen h-[750px]'>

            <div className='md:flex md:flex-row  h-auto w-auto mt-4 bg-gray-50 border  border-gray-300 rounded-xl border-gray-300 shadow-custom '>

                <div className='md:h-full md:rounded-xl md:flex md:items-center md:w-[250px]  md:justify-center md:rounded-r-[40%] radial-gradient-bg  shadow-xl w-[295px] mb-2 rounded-b-[50%] rounded-t-lg h-[150px] flex flex-row  justify-center'>
                    <h1 className='shadow-white  text-3xl font-bold text-cyan-50'>Eclestay</h1>
                </div>

                <form className='md:pl-2 md:text-sm md:rounded-xl flex flex-col items-start justify-between bg-gray-50   border-b-0 w-[295px] rounded-b-xl' onSubmit={handleSubmit}>
                    <div className='mt-2 ml-2 mb-5'>
                        <h1 className=' font-bold text-lg text-gray-700 mb-2'>Sign Up</h1>
                        <p className='shadow text-xs'>Create account to join our community</p>
                    </div>
                    <div className='flex flex-col ml-2 text-sm bg-gray-50 h-[45px]'>
                        <input className='shadow-lg border-b border-gray-400 border-clip-shadow text-black placeholder-gray-700 rounded-lg pl-3 hover:bg-gray-200 hover:w-[180px] hover:transition-shadow hover:transition-colors duration-300' name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                        {errors.firstName && <span className='text-xs text-red-600 p-absolute'>{errors.firstName}</span>}
                    </div>
                    
                    <div className='flex flex-col ml-2 text-sm bg-gray-50 h-[45px]'>
                        <input className='shadow-lg border-b border-gray-400 border-clip-shadow text-black placeholder-gray-700 rounded-lg pl-3 hover:bg-gray-200 hover:w-[180px] hover:transition-shadow hover:transition-colors duration-300' name="secondName" placeholder="Second Name" value={formData.secondName} onChange={handleChange} />
                        {errors.secondName && <span className='text-xs text-red-600'>{errors.secondName}</span>}
                    </div>
                    
                    <div className='flex flex-col ml-2 text-sm bg-gray-50 h-[45px]'>
                        <input className='shadow-lg border-b border-gray-400 border-clip-shadow text-black placeholder-gray-700 rounded-lg pl-3 hover:bg-gray-200 hover:w-[180px] hover:transition-shadow hover:transition-colors duration-300' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        {errors.email && <span className='text-xs text-red-600'>{errors.email}</span>}
                    </div>

                    <div className='flex flex-col ml-2 text-sm bg-gray-50 h-auto mb-5'>
                        <input className='shadow-lg border-b border-gray-400 border-clip-shadow text-black placeholder-gray-700 rounded-lg pl-3 hover:bg-gray-200 hover:w-[180px] hover:transition-shadow hover:transition-colors duration-300' name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                        {errors.phone && <span className='text-xs text-red-600'>{errors.phone}</span>}
                    </div>

                    <div className='flex flex-col ml-2 text-sm bg-gray-50 h-auto mb-6'>
                        <input className='shadow-lg border-b border-gray-400 border-clip-shadow text-black placeholder-gray-700 rounded-lg pl-3 hover:bg-gray-200 hover:w-[180px] hover:transition-shadow hover:transition-colors duration-300' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                        {errors.password && <span className='text-xs text-red-600'>{errors.password}</span>}
                    </div>

                    <div className='flex flex-col ml-2 text-sm bg-gray-50 h-[45px]'>
                        <input className='shadow-lg border-b border-gray-400 border-clip-shadow text-black placeholder-gray-700 rounded-lg pl-3 hover:bg-gray-200 hover:w-[180px] hover:transition-shadow hover:transition-colors duration-300' type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                        {errors.confirmPassword && <span className='text-xs text-red-600'>{errors.confirmPassword}</span>}
                    </div>

                    <div className='ml-2 flex flex-row text-xs items-center justify-between mb-6'>
                        <input className='mr-2' type="checkbox" name="" id="" required/> 
                        <p>I agree with the <a className='text-blue-600 underline text-sm' href="">Terms & Conditions</a>  and the <a className='text-blue-600 underline text-sm' href="">Privacy Policy</a> of Eclestay</p>
                    </div>

                    <button className='w-3/4 bg-blue-900 ml-9 rounded-lg h-[32px] mb-5 hover:bg-gradient' type="submit">Signup</button>
                    
                    <div className='flex flex-row items-center justify-center w-[295px] h-[20px] mb-4 text-sm  mb-3'>
                        <p className='text-xs mr-1'>Already have account?</p>
                        <a className='text-blue-700 font-medium underline' href="">Sign In</a>
                    </div>

                </form>
            </div>
             
            
        </section>
    );
};

export default Signup;



// import { useState } from "react";
// import "../Styles/customStyles.css";

// export default function SignUp() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <>
//       <div className="mx-auto w-full lg:w-8/12 mt-6 rounded-xl border-none outline-none overflow-hidden flex flex-col lg:flex-row max-h-auto min-h-64">
//         <div className="radial-gradient-bg w-full lg:w-72 p-4 rounded-t-xl lg:rounded-l-xl lg:rounded-t-none flex flex-col justify-between">
//           <p className="text-white">EcleStay</p>
//           <div className="flex flex-col items-center justify-center flex-grow">
//             <h1 className="text-white text-center text-2xl hidden sm:block md:hidden lg:block">Welcome to</h1>
//             <h1 className="flex font-bold text-white text-xl hidden sm:block md:hidden lg:block">EcleStay</h1>
//           </div>
//         </div>
//         <div className="rounded-b-xl lg:rounded-r-xl lg:rounded-b-none bg-blue-100 w-full p-6 lg:p-10">
//           <h1 className="text-black text-2xl lg:text-3xl mb-4 font-bold">Sign Up</h1>
//           <p className="text-black mb-6">Create an account here with Us to join Us!</p>
//           <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input type="text" placeholder="First Name" className="block appearance-none bg-blue-100 w-full text-gray-700 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" />
//             <input type="text" placeholder="Last Name" className="block appearance-none bg-blue-100 w-full text-gray-700 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" />
//             <input type="text" placeholder="Email" className="block appearance-none bg-blue-100 w-full text-gray-700 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" />
//             <input type="text" placeholder="Phone Number e.g +254 708 533 071" className="block appearance-none bg-blue-100 w-full text-gray-700 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" />
//             <div className="relative w-full">
//               <input type={showPassword ? "text" : "password"} placeholder="Password" className="block appearance-none bg-blue-100 w-full text-gray-700 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
//                 <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showPassword ? "M15 12h.01M12 12h.01M9 12h.01M4.73 4.73a13.33 13.33 0 0 0-2.73 7.27 13.33 13.33 0 0 0 21.46 0A13.33 13.33 0 0 0 19.27 4.73M21 21l-6-6" : "M12 19.5a7.5 7.5 0 0 1-6.36-3.64m12.72 0A7.5 7.5 0 0 1 12 19.5m6.36-3.64A13.33 13.33 0 0 0 12 5.5a13.33 13.33 0 0 0-6.36 10.36m12.72 0A7.5 7.5 0 0 1 12 19.5m-6.36-3.64 6-6"} />
//                 </svg>
//               </div>
//             </div>
//             <div className="relative w-full">
//               <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="block appearance-none bg-blue-100 w-full text-gray-700 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
//                 <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showConfirmPassword ? "M15 12h.01M12 12h.01M9 12h.01M4.73 4.73a13.33 13.33 0 0 0-2.73 7.27 13.33 13.33 0 0 0 21.46 0A13.33 13.33 0 0 0 19.27 4.73M21 21l-6-6" : "M12 19.5a7.5 7.5 0 0 1-6.36-3.64m12.72 0A7.5 7.5 0 0 1 12 19.5m6.36-3.64A13.33 13.33 0 0 0 12 5.5a13.33 13.33 0 0 0-6.36 10.36m12.72 0A7.5 7.5 0 0 1 12 19.5m-6.36-3.64 6-6"} />
//                 </svg>
//               </div>
//             </div>
//           </form>

//           <div className="flex items-center mt-4">
//             <input type="checkbox" className="mr-2" />
//             <p className="text-black">I've read and agree with <span className="underline text-blue-950 font-bold cursor-pointer">Terms of Service</span> and our <span className="underline text-blue-950 font-bold cursor-pointer">Privacy Policy</span>.</p>
//           </div>

//           <div className="mt-6">
//             <button className="w-full py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800">SIGN UP</button>
//             <p className="text-black mt-4 text-center">Already have an account? <span className="underline cursor-pointer text-blue-950 font-bold">Sign In</span></p>
//           </div>

//           <div className="flex items-center justify-center mt-3">
//             <button className="flex items-center bg-blue-950 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2">
//               <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1">
//                 <title>Google-color</title>
//                 <desc>Created with Sketch.</desc>
//                 <defs></defs>
//                 <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//                   <g id="Color-" transform="translate(-401.000000, -860.000000)">
//                     <g id="Google" transform="translate(401.000000, 860.000000)">
//                       <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path>
//                       <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path>
//                       <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path>
//                       <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//               <span>Continue with Google</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
