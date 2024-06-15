
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
// import { BiSearch } from 'react-icons/bi';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Modal from 'react-modal';
// import Cloud from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Cloud.png';
// import Contact from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Contact.png';



// const Navbar = () => {
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [showGuestModal, setShowGuestModal] = useState(false);
//   const [guestCount, setGuestCount] = useState('');
//   const [destination, setDestination] = useState('');

//   const toggleGuestModal = () => setShowGuestModal(!showGuestModal);

//   const handleGuestChange = (e) => {
//     setGuestCount(e.target.value);
//   };

//    const handleDestinationChange = (e) => {
//     setDestination(e.target.value);
//    };

//   return (
//     <div>
//       <div className="bg-gray-100 flex w-full h-1/3 flex-col md:flex-row md:justify-between p-4 lg:p-7">
        // <div className="flex items-center justify-between w-full md:w-auto">
        //   <img
        //     className="h-8 mr-4 md:h-12 lg:h-16 md:mr-6 sm:px-4"
        //     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        //     alt="EcleStay Logo"
        //   />
        // </div>

//         <div className={`md:flex md:items-center ${mobileMenuOpen ? 'block' : 'hidden'} space-x-1 md:space-x-6 font-bold shadow-md p-4 flex flex-wrap rounded-full lg:mt-1 justify-between md:justify-start md:px-28 md:h-[70px] md:text-[30px] md:font-bold items-center text-slate-700 md:space-y-0 space-y-4 md:py-3 md:w-[800px]`}>
//   <Link to="/suites" className="nav-link block md:hidden">Suites</Link>
//   <Link to="/food" className="nav-link block md:hidden">Food</Link>
//   <Link to="/ride" className="nav-link block md:hidden">Ride</Link>
//   <Link to="/experiences" className="nav-link block md:hidden">Experiences</Link>
//   <Link to="/events" className="nav-link block md:hidden">Events</Link>
// </div>

//         <div className="flex items-center space-x-1 md:space-x-6">
//           <span className="hidden lg:block text-gray-700 font-bold text-xl">Welcome home</span>

//           <img src={Cloud} alt="Weather Icon" className="hidden md:block h-6 w-6 text-gray-400 hover:text-blue-500" />

//           <button
//             type="button"
//             className="text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hidden md:block"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
//           </button>
//           <button
//             type="button"
//             className="text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             onClick={() => setUserMenuOpen(!userMenuOpen)}
//           >
//             <AiOutlineUser className="h-6 w-6" />
//           </button>

//           {userMenuOpen && (
//             <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
//               <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
//                 Your Profile
//               </Link>
//               <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
//                 Settings
//               </Link>
//               <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
//                 Logout
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Search Functionality for Medium and Large Screens */}
//       <div className="hidden bg-gray-100 md:flex justify-center p-4 lg:p-7">
//         <div className="bg-white rounded-full shadow-md p-4 flex flex-wrap justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full max-w-4xl">
//           <div className="flex items-center space-x-2 w-full sm:w-auto">
//             <BiSearch className="text-gray-700 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search destinations"
//               className="focus:outline-none w-full sm:w-auto"
//               value={destination}
//               onChange={handleDestinationChange}
//             />
//           </div>
//           <div className="border-t border-gray-300 w-full sm:w-auto sm:border-l sm:border-t-0 h-0 sm:h-6"></div>
//           <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 w-full sm:w-auto">
//             <div className="flex flex-col items-start w-full sm:w-auto">
//               <span className="text-sm text-gray-500">Check in</span>
//               <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} className='text-black' />
  
//             </div>
//             <div className="border-t border-gray-300 w-full sm:w-auto sm:border-l sm:border-t-0 h-0 sm:h-6"></div>
//             <div className="flex flex-col items-start w-full sm:w-auto">
//               <span className="text-sm text-gray-500">Check out</span>

//                  <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} className='text-black' />
//             </div>
//             <div className="border-t border-gray-300 w-full sm:w-auto sm:border-l sm:border-t-0 h-0 sm:h-6"></div>
//             <div className="flex flex-col items-start w-full sm:w-auto">
//               <span className="text-sm text-gray-500">Who</span>
//               <input
//                 type="text"
//                 placeholder="Add guests"
//                 className="focus:outline-none w-full sm:w-auto"
//                 value={guestCount}
//                 onClick={toggleGuestModal}
//                 readOnly
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search Bar for Small Screens */}
//       <div className="flex md:hidden justify-end p-4 bg-gray-100">
//         <div className="bg-white rounded-full shadow-md p-2 flex items-center w-full max-w-xs">
//           <BiSearch className="text-gray-700 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="focus:outline-none w-full"
//             value={destination}
//             onChange={handleDestinationChange}
//           />
//         </div>
//       </div>

//       {/* Guest Modal */}
//       <Modal
//         isOpen={showGuestModal}
//         onRequestClose={toggleGuestModal}
//         contentLabel="Guest Modal"
//         className="modal"
//         overlayClassName="overlay"
//       >
//         <h2>Add Guests</h2>
//         <input
//           type="number"
//           placeholder="Number of guests"
//           value={guestCount}
//           onChange={handleGuestChange}
//         />
//         <button onClick={toggleGuestModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default Navbar;

   

import React, { useState } from 'react';


  

  
  const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const handleMobileMenuToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <nav className="bg-white
       flex w-full h-1/3 flex-col md:flex-row md:justify-between p-4 lg:p-7">
        <div className="w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
  
            {/* Logo - Positioned at the left margin */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-0">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              
            </div>
  
            {/* Centered Menu for larger screens */}
            <div className="flex flex-1 items-center justify-center mx-auto sm:items-stretch sm:justify-center">
              <div className="hidden sm:flex space-x-4 rounded-full shadow-md p-4  flex-wrap justify-center items-center space-y-4 
              lg:space-y-0 lg:space-x-4 w-full max-w-4xl">
                <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
              </div>
            </div>
  
            {/* Icons on the right margin */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
  
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={handleMobileMenuToggle}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;




           


