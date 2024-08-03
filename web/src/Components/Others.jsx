import React, { useState } from 'react';
import City1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/City1.jpg';
import City2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/City2.jpg';
import city3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city3.jpg';
import city4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city4.jpg';
import city5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city5.jpg';
import city6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city6.jpg';
import city7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city7.jpg';
import city8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city8.jpg';

const CitiesPage = () => {
  const citiesData = [
    {
      id: 1,
      type: 'Hotel Suite',
      name: 'Deluxe Suite',
      price: '$250 per night',
      imageUrl: City1,
    },
    {
      id: 2,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$1500 per month',
      imageUrl: City2,
    },
    {
      id: 3,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: city3,
    },
    {
      id: 4,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: city4,
    },
    {
      id: 5,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: city5,
    },
    {
      id: 6,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: city6,
    },
    {
        id: 7,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: city7,
      },
      {
        id: 8,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: city8,
      },
    
  ];

  const [visibleCitiesPageCount, setVisibleCitiesPageCount] = useState(6);

  const showMoreCitiesPage = () => {
    setVisibleCitiesPageCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {citiesData.slice(0, visibleCitiesPageCount).map((cities) => (
          <div key={cities.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={cities.imageUrl} alt={cities.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{cities.name}</h2>
                <p className="text-gray-600">{cities.type}</p>
              </div>
              <p className="text-gray-800 mt-2">{cities.price}</p>
            </div>
          </div>
        ))}
        {visibleCitiesPageCount < citiesData.length && (
          <div className="flex justify-center items-center col-span-full">
            <button
              onClick={showMoreCitiesPage}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CitiesPage;
reset form
    // <div className='w-3/4 h-full flex md:pt-60 pt-52 items-center justify-center ml-24 mt-10 overflow-hidden'>
    //   <div className='bg-blue-100 rounded-lg w-full shadow-lg max-w-md py-6 space-y-6 '>
    //     <h2 className='text-blue font-bold flex text-center justify-center text-2xl ml'>Reset Password</h2>
    //     <form onSubmit={handleSubmit} className="mt-8 space-y-6">
    //       <div className='space-y-1'>
    //         <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-4">Email</label>
    //         <input 
    //           id="email"
    //           name="email"
    //           type='email'
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className='w-full ml-4 px-3 py-2 text-gray-700 placeholder-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500
    //            focus:border-blue-500 text-sm overflow-hidden mr-4'
    //           placeholder='Email address'
    //           required
    //         />
    //         <label htmlFor="newPassword" className='ml-4 block text-sm font-medium text-gray-700'>New Password</label>
    //         <input
    //           id="newPassword"
    //           name="newPassword"
    //           type='password'
    //           value={newPassword}
    //           onChange={(e) => setNewPassword(e.target.value)}
    //           className='w-full ml-4 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
    //           placeholder='New password'
    //           required
    //         />
    //         <label htmlFor="password" className='block text-sm font-medium text-gray-700 ml-4'>Confirm Password</label>
    //         <input
    //           id="password"
    //           name="password"
    //           type='password'
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className='w-full ml-4 px-3 py-2 text-gray-700 placeholder-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500
    //            focus:border-blue-500 text-sm overflow-hidden mr-4'
    //           placeholder='Confirm password'
    //           required
    //         />
    //       </div>
    //       {error && <p className='text-red-500 mt-4'>{error}</p>}
    //       {message && <p className='text-green-500 mt-4'>{message}</p>}
    //       <div>
    //         <button
    //           type='submit'
    //           className='w-full text-white px-4 py-2 font-medium bg-blue-500 hover:bg-blue-600 text-sm rounded-md overflow-hidden 
    //           focus:outline-none focus:ring-2 focus:ring-blue-500 border-transparent'
    //         >
    //           Reset Password
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

import React, { useState } from 'react';
import Room1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room1.jpg';
import Room2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room2.jpg';
import Room3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room3.jpg';
import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';
import Room5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room5.jpg';
import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
import Room7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room7.jpg';
import Room8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room8.jpg';
import Room9 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room9.jpg';
import Room10 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room10.jpg';

const Rooms = () => {
  const roomsData = [
    {
      id: 1,
      type: 'Hotel Suite',
      name: 'Deluxe Suite',
      price: '$250 per night',
      imageUrl: Room1,
    },
    {
      id: 2,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$1500 per month',
      imageUrl: Room2,
    },
    {
      id: 3,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room3,
    },
    {
      id: 4,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room4,
    },
    {
      id: 5,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room5,
    },
    {
      id: 6,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room6,
    },
    {
        id: 7,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: Room7,
      },
      {
        id: 8,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: Room8,
      },
      {
        id: 9,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: Room9,
      },
      {
        id: 10,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: Room10,
      },
    
  ];

  const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);

  const showMoreRooms = () => {
    setVisibleRoomsCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roomsData.slice(0, visibleRoomsCount).map((cities) => (
          <div key={rooms.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={rooms.imageUrl} alt={rooms.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{rooms.name}</h2>
                <p className="text-gray-600">{rooms.type}</p>
              </div>
              <p className="text-gray-800 mt-2">{rooms.price}</p>
            </div>
          </div>
        ))}
        {visibleRoomsCount < roomsData.length && (
          <div className="flex justify-center items-center col-span-full">
            <button
              onClick={showMoreRooms}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;

const roomsData = [
    // ... other room objects
    {
      id: 8,
      date: '21st, July 2024',
      name: 'Zanzibar',
      price: '$600 per month',
      imageUrl: Room8,
    },
    // ... any additional room objects
  ];
  
  const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);
  
  const showMoreRooms = () => {
    setVisibleRoomsCount((prevCount) => prevCount + 6);
  };
  
  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Best Choices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roomsData.slice(0, visibleRoomsCount).map((room) => (
          <div key={room.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={room.imageUrl} alt={room.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{room.name}</h2>
              <p className="text-gray-600">{room.date}</p>
              <p className="text-gray-800 mt-2">{room.price}</p>
            </div>
          </div>
        ))}
        {visibleRoomsCount < roomsData.length && (
          <div className="flex justify-center items-center col-span-full">
            <button
              onClick={showMoreRooms}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
  
  export default Rooms;

import React, { useState } from 'react';
import beach1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach1.jpg';
import beach2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach2.jpg';
import beach3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach3.jpg';
import beach4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach4.jpg';
import beach5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach5.jpg';
import beach6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach6.jpg';

const Beach = () => {
  const beachData = [
    {
      id: 1,
      type: 'Hotel Suite',
      name: 'Deluxe Suite',
      price: '$250 per night',
      imageUrl: beach1,
    },
    {
      id: 2,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$1500 per month',
      imageUrl: beach2,
    },
    {
      id: 3,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: beach3,
    },
    {
      id: 4,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: beach4,
    },
    {
      id: 5,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: beach5,
    },
    {
      id: 6,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: beach6,
    },
   
    
  ];

  const [visibleBeachCount, setVisibleBeachCount] = useState(6);

  const showMoreBeach = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {beachData.slice(0, visibleBeachCount).map((beach) => (
          <div key={beach.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={beach.imageUrl} alt={beach.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{beach.name}</h2>
                <p className="text-gray-600">{beach.type}</p>
              </div>
              <p className="text-gray-800 mt-2">{beach.price}</p>
            </div>
          </div>
        ))}
        {visibleBeachCount < beachData.length && (
          <div className="flex justify-center items-center col-span-full">
            <button
              onClick={showMoreBeach}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Beach;


       {/* Reservation Form  */}
       <div className="mt-8 bg-white p-6 rounded-xl md:rounded-lg w-1/2">
       <h2 className="font-bold text-xl">KSH 35666</h2>
       <form className="flex flex-col items-center">
         <input
           className="w-1/2 md:w-full p-2 mb-4 border border-gray-300 rounded"
           type="date"
           placeholder="Check In"
         />
         <input
           className="w-1/2 p-2 mb-4 border border-gray-300 rounded"
           type="date"
           placeholder="Check Out"
         />
         <input
           className="w-1/2 p-2 mb-4 border border-gray-300 rounded"
           type="number"
           placeholder="Guests"
         />

       </form>
     </div>


import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 ">
      <div className="flex flex-wrap items-center justify-between w-full p-4">
        {/* Logo */}
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        {/* Centered Menu for larger screens */}
        <div className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Buttons on the right */}
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMobileMenuOpen}
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import Cloud from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Cloud.png';
import Contact from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Contact.png';



const Navbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [guestCount, setGuestCount] = useState('');
  const [destination, setDestination] = useState('');

  const toggleGuestModal = () => setShowGuestModal(!showGuestModal);

  const handleGuestChange = (e) => {
    setGuestCount(e.target.value);
  };

   const handleDestinationChange = (e) => {
    setDestination(e.target.value);
   };

  return (
    <div>
      <div className="bg-gray-100 flex w-full h-1/3 flex-col md:flex-row md:justify-between p-4 lg:p-7">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            className="h-8 mr-4 md:h-12 lg:h-16 md:mr-6 sm:px-4"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="EcleStay Logo"
          />
        </div>

        <div className={`md:flex md:items-center ${mobileMenuOpen ? 'block' : 'hidden'} space-x-1 md:space-x-6 font-bold shadow-md p-4 flex flex-wrap rounded-full lg:mt-1 justify-between md:justify-start md:px-28 md:h-[70px] md:text-[30px] md:font-bold items-center text-slate-700 md:space-y-0 space-y-4 md:py-3 md:w-[800px]`}>
  <Link to="/suites" className="nav-link block md:hidden">Suites</Link>
  <Link to="/food" className="nav-link block md:hidden">Food</Link>
  <Link to="/ride" className="nav-link block md:hidden">Ride</Link>
  <Link to="/experiences" className="nav-link block md:hidden">Experiences</Link>
  <Link to="/events" className="nav-link block md:hidden">Events</Link>
</div>

        <div className="flex items-center space-x-1 md:space-x-6">
          <span className="hidden lg:block text-gray-700 font-bold text-xl">Welcome home</span>

          <img src={Cloud} alt="Weather Icon" className="hidden md:block h-6 w-6 text-gray-400 hover:text-blue-500" />

          <button
            type="button"
            className="text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hidden md:block"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
          </button>
          <button
            type="button"
            className="text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <AiOutlineUser className="h-6 w-6" />
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                Your Profile
              </Link>
              <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                Settings
              </Link>
              <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Search Functionality for Medium and Large Screens */}
      <div className="hidden bg-gray-100 md:flex justify-center p-4 lg:p-7">
        <div className="bg-white rounded-full shadow-md p-4 flex flex-wrap justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full max-w-4xl">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <BiSearch className="text-gray-700 w-5 h-5" />
            <input
              type="text"
              placeholder="Search destinations"
              className="focus:outline-none w-full sm:w-auto"
              value={destination}
              onChange={handleDestinationChange}
            />
          </div>
          <div className="border-t border-gray-300 w-full sm:w-auto sm:border-l sm:border-t-0 h-0 sm:h-6"></div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 w-full sm:w-auto">
            <div className="flex flex-col items-start w-full sm:w-auto">
              <span className="text-sm text-gray-500">Check in</span>
              <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} className='text-black' />
  
            </div>
            <div className="border-t border-gray-300 w-full sm:w-auto sm:border-l sm:border-t-0 h-0 sm:h-6"></div>
            <div className="flex flex-col items-start w-full sm:w-auto">
              <span className="text-sm text-gray-500">Check out</span>

                 <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} className='text-black' />
            </div>
            <div className="border-t border-gray-300 w-full sm:w-auto sm:border-l sm:border-t-0 h-0 sm:h-6"></div>
            <div className="flex flex-col items-start w-full sm:w-auto">
              <span className="text-sm text-gray-500">Who</span>
              <input
                type="text"
                placeholder="Add guests"
                className="focus:outline-none w-full sm:w-auto"
                value={guestCount}
                onClick={toggleGuestModal}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar for Small Screens */}
      <div className="flex md:hidden justify-end p-4 bg-gray-100">
        <div className="bg-white rounded-full shadow-md p-2 flex items-center w-full max-w-xs">
          <BiSearch className="text-gray-700 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none w-full"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
      </div>

      {/* Guest Modal */}
      <Modal
        isOpen={showGuestModal}
        onRequestClose={toggleGuestModal}
        contentLabel="Guest Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Add Guests</h2>
        <input
          type="number"
          placeholder="Number of guests"
          value={guestCount}
          onChange={handleGuestChange}
        />
        <button onClick={toggleGuestModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Navbar;



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white
     flex w-full h-1/3 flex-col md:flex-row md:justify-between p-4 lg:p-7">
       {/* <div className="w-full px-2 sm:px-6 lg:px-8">  */}
        {/* <div className="relative flex h-16 items-center justify-between"> */}

          {/* Logo - Positioned at the left margin */}
           <div className="absolute inset-y-0 left-0 flex items-center pl-0">
            <img
              className="h-8 w-8 "
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            
          </div> 


          {/* Centered Menu for larger screens */}
          <div className="flex flex-1 items-center justify-center mx-auto sm:items-stretch sm:justify-center">
            <div className="hidden sm:flex space-x-4 rounded-full shadow-md p-4  flex-wrap justify-center items-center space-y-4 
            lg:space-y-0 lg:space-x-4 w-full max-w-4xl">
              <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Suites</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Experiences</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Food</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Events</a>
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
        {/* </div> */}
      {/* </div> */}

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




import React, { useEffect, useState } from 'react';
 import { getToken,clearToken } from '../Services/authService';


function Food() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

   //let token = 'eyJ0eXiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc3NDg5MjEsIm5iZiI6MTcxNzc0ODkyMSwiZXhwIjoxNzE3NzUyNTIxLCJkYXRhIjp7InN1YiI6MTQyLCJmaXJzdF9uYW1lIjoiYWRtaW4iLCJzZWNvbmRfbmFtZSI6ImFkbWluIiwicGhvbmUiOiIxMjM0NTgwMCIsImVtYWlsIjoibXdhbmdpQGdtYWlsLmNvbSIsInJvbGVzIjpbImd1ZXN0IiwiYWRtaW4iXX19.tQZ5AAL7OwFP8dQntiRdh5p3AgYxmLmtotP_MRMMOg8'
  const getData = async () => {
     const token=getToken();
    try {
      const response = await fetch('api/counties',
      
        {
          headers: {
            "ngrok-skip-browser-warning": '69420',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
             'Authorization': `Bearer ${'token'}`,
      
          },
        }
      );
  //       useEffect(() => {
  //   getData();
  // }, []);
      
      
      console.log(response)

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('Data:', data);

        console.log(data)
        setProducts(data);
        var roles, counties;
        var [roles, counties, ...rest] = data;
        console.log(roles.roles)
      } else {
        const responseText = await response.text();
        console.error('Response content type:', contentType);
        console.error('Response text:', responseText);
        // Handle non-JSON responses here
      }
    } catch (error) {
      setError(error.message);
      console.error('Error while getting products', error);
    }

    // console.log('First county:', Data[0]);
  };

  // useEffect(() => {
  //   axios.get("https://c78a-41-90-101-26.ngrok-free.app/show/hosts", {headers: {
  //       "ngrok-skip-browser-warning": "69420",
  //       }})

  //     .then(res => {
  //       if (res.headers['content-type'].includes('application/json')) {
  //         setProducts(res.data);
  //       } else {
  //         console.error('Response is not JSON:', res.data);
  //       }
  //     })
  //     .catch(err => console.error('Error while getting products', err));
  // }, []);

  return (
    <div className="container mx-auto">
      <button onClick={getData}>click me</button>
      {/* <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((data) => (
          <div key={index} className="border p-4">
            <h2 className="text-xl font-semibold mb-2">Product {index + 1}</h2>
            <ul>
              {Object.(product).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <strong>{key}:</strong> <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Food;



// import React from 'react';
// import Room2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room2.jpg';
// import Room3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room3.jpg';
// import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';

// const Booking = () => {
//   return (
//     <div className="min-h-screen bg-blue-500 py-12 px-4 ">
//       <div className='bg-white md:ml-8 ml-0 md:mr-8 mr-0'>
//           {/* Title */}
//       <div className="text-center">
//         <h1 className="text-3xl font-bold mb-4 mt-4">Booking Page</h1>
//         <p className="text-gray-600 mb-8">Experience something new every moment</p>
//       </div>
//       <div className="hidden md:show relative">
//   <button onClick={() => history.goBack()} className="absolute  left-4 bg-blue-500 hover:bg-blue-600 text-white font-bold top-0 py-4 px-6 rounded">
//     Back
//   </button>
//   {/* Your other content here */}
// </div>


//         {/* Rooms */}
//       <div className="flex justify-center  md:space-x-4 mb-8">
//         <div className="max-w-xs rounded overflow-hidden shadow-lg">
//           <img className="w-full" src={Room2} alt="Room 2" />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">Room 2</div>
//           </div>
//         </div>
//         <div className="max-w-xs rounded overflow-hidden shadow-lg">
//           <img className="w-full" src={Room3} alt="Room 3" />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">Room 3</div>
//           </div>
//         </div>
//         <div className="max-w-xs rounded overflow-hidden shadow-lg">
//           <img className="w-full" src={Room4} alt="Room 4" />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">Room 4</div>
//           </div>
//         </div>
//       </div>

//       {/* Booking Form */}
//       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg ">
//         {/* Room Type Selection */}
//          <div className="mb-4">
//           <label className="block text-lg font-medium text-gray-700">Bedroom</label>
//           <select className="form-select mt-1 block w-full py-2 border-black border-2 
//           rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring
//            focus:ring-blue-500 focus:ring-opacity-50">
//             <option>Select bedroom type</option>
//             <option>Single Room</option>
//             <option>Double Room</option>
//             <option>Suite</option>
//           </select>
//         </div> 

//         {/* Number of Guests */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
//           <select className="form-select mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
//             <option>Select number of guests</option>
//             <option>1</option>
//             <option>2</option>
//             <option>3</option>
//             <option>4</option>
//           </select>
//         </div>
        

//         {/* Check-in Date and Time */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Check-in Date and Time</label>
//           <input type="datetime-local" className="form-input mt-1 block w-full text-lg 
//           rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 
//           focus:ring-opacity-50 border-black border-2" />
//         </div>

//         {/* Check-out Date and Time */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Check-out Date and Time</label>
//           <input type="datetime-local" className="form-input mt-1 block w-full border-black border-2 text-lg
//           rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
//         </div>

//         {/* Free Pick */}
//         <div className="mb-4 flex items-center">
//           <label className="block text-sm font-medium text-gray-700">Free Pick?</label>
//           <div className="ml-2 flex items-center">
//             <input type="radio" id="free-pick-yes" name="free-pick" className="form-radio h-5 w-5 text-blue-600" />
//             <label htmlFor="free-pick-yes" className="ml-2">Yes</label>
//           </div>
//           <div className="ml-4 flex items-center">
//             <input type="radio" id="free-pick-no" name="free-pick" className="form-radio h-5 w-5 text-blue-600" />
//             <label htmlFor="free-pick-no" className="ml-2">No</label>
//           </div>
//         </div>

//         {/* Type of Vehicles */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Type of Vehicles</label>
//           <select className="form-select mt-1 block w-full border-black rounded-md text-lg
//           shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 
//           focus:ring-opacity-50">
//             <option>Select vehicle type</option>
//             <option>Car</option>
//             <option>Van</option>
//             <option>Motorcycle</option>
//             <option>Bicycle</option>
//           </select>
//         </div>

//         {/* Additional Requests */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Additional Requests</label>
//           <textarea rows="3" className="form-textarea mt-1 block w-full border-black rounded-md shadow-sm 
//          border-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;

// import React, { useState, useContext } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import { ServicesContext } from '../ServicesProvider';

// const Booking = () => {
//   const services = useContext(ServicesContext);
//   const servicesData = services.servicesData;
//   const { id } = useParams();
//   const history = useHistory(); 
//   const service = servicesData.find(service => service.service_id === parseInt(id, 10));

//   if (!service) {
//     return <p>Service not found</p>;
//   }

//   return (
//     <div className="min-h-screen bg-blue-500 py-12 px-4 ">
//       <div className='bg-white md:ml-8 ml-0 md:mr-8 mr-0'>
//           {/* Title */}
//       <div className="text-center">
//         <h1 className="text-3xl font-bold mb-4 mt-4">Booking Page</h1>
//         <p className="text-gray-600 mb-8">Experience something new every moment</p>
//       </div>
//       <div className="hidden md:show relative">
//   <button onClick={() => history.goBack()} className="absolute  left-4 bg-blue-500 hover:bg-blue-600 text-white font-bold top-0 py-4 px-6 rounded">
//     Back
//   </button>
//   {/* Your other content here */}
// </div>


//         {/* Rooms */}
//       <div className="flex justify-center  md:space-x-4 mb-8">
//         <div className="max-w-xs rounded overflow-hidden shadow-lg">
//         <div className="flex justify-center md:space-x-4 mb-8">
//           {service.images.map(image, index => (
//             <div className='max-w-xs rounded overflow-hidden shadow-lg'>
            
//             <li key={image.image_id}>{image.service_name}</li> 
//               <img className="w-full" src={service.imageUrl} alt={`Room ${index + 1}`} />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{`Room ${index + 1}`}</div>
//               </div>
//             </div>
//           ))}
//         </div>
// </div>


//       </div>

//       {/* Booking Form */}
//       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg ">
//         {/* Room Type Selection */}
//         <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">Bedroom</label>
//             <input
//               type="text"
//               className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={service.beds}
//               readOnly
//             />
//           </div>


//         {/* Number of Guests */}
//         <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
//             <input
//               type="number"
//               className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={service.guests}
//               readOnly
//             />
//           </div>


//         {/* Check-in Date and Time */}
//         <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Check-in Date and Time</label>
//             <input
//               type="datetime-local"
//               className="form-input mt-1 block w-full text-lg rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 border-black border-2"
//               defaultValue={service.start_date}
//             />
//           </div>

//         {/* Check-out Date and Time */}
//         <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Check-out Date and Time</label>
//             <input
//               type="datetime-local"
//               className="form-input mt-1 block w-full border-black border-2 text-lg rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               defaultValue={service.end_date}
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Cancellation Policy</label>
//             <textarea
//               className="form-textarea mt-1 block w-full border-black rounded-md shadow-sm border-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               rows="3"
//               value={service.cancellation_policy}
//               readOnly
//             ></textarea>
//           </div>


//         {/* Submit Button */}
//         <div className="text-center">
//           <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;

<Link to="suites" className="rounded-md px-7 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Accommodations</Link>
<Link to="experiences" className="rounded-md px-7 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Experiences</Link>
<Link to="food" className="rounded-md px-7 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Food</Link>

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Food0 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food0.jpg';
// import Food7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food7.jpg';
// import Food5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food5.jpg';
// import villa1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa1.jpg';
// import villa4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa4.jpg';
// import villa8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa8.jpg';
// import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
// import Room3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room3.jpg';
// import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';
// import terr5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr5.jpg';
// import terr4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr4.jpg';


// const HomePage = () => {
//   const data = [
//     {id:0, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food0},
//     {id:7, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food7},
//     {id:5, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food5},
//     {id:8, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:villa8},
//     {id:1, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:villa1},
//     {id:3, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:villa4},
//     {id:4, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Room4},
//     {id:10, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Room3},
//     {id:6, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Room6},
//     {id:5, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:terr5},
//     {id:4, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:terr4},

   
//   ];

//   const [visibleServiceCount, setVisibleServiceCount] = useState(8);

//   const showMoreServices = () => {
//     setVisibleServiceCount(prevCount => prevCount + 8); // Increase by 8 to show more services
//   };

//   return (

//     <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//     <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Services</h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {data.slice(0, visibleServiceCount).map(service => (
//         <div key={service.id} className="border rounded-lg overflow-hidden shadow-lg">
//           <img src={service.imageUrl} alt={service.name} className="w-full h-72 object-cover" />
//           <div className="p-4">
//             <h2 className="text-xl font-bold">{service.name}</h2>
//             <p className="text-gray-600">{service.type}</p>
//             <p className="text-gray-800 mt-2">{service.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     {visibleServiceCount < data.length && (
//       <div className="flex justify-center items-center mt-6">
//         <button
//           onClick={showMoreServices}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//         >
//           More Services
//         </button>
//       </div>
//     )}
//         <footer className=" text-white mt-12 p-4">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-2xl font-bold">EcleStay</h2>
//           <p className="text-gray-400">123 Street, City, Country</p>
//           <p className="text-gray-400">Phone: (123) 456-7890</p>
//           <p className="text-gray-400">Email: info@eclestay.com</p>
//         </div>
//         <div className="container mx-auto mt-4 md:mt-0 flex flex-col items md:flex-row md:space-x-6">
//           <a href="/contact-us" className="text-gray-400 hover:text-white">
//             Contact Us
//           </a>
//           <a href="/about-us" className="text-gray-400 hover:text-white">
//             About Us
//           </a>
//           <a href="/policy" className="text-gray-400 hover:text-white">
//             Policy
//           </a>
//         </div>
//         <div className="flex space-x-6">
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//             Facebook
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//             Twitter
//           </a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//             Instagram
//           </a>
//         </div>
//       </div>
//       <div className="mt-4 text-center text-gray-500">
//         <p>&copy; 2024 EcleStay. All rights reserved.</p>
//       </div>
//     </footer>
//   </div>

//   );
// };

// export default HomePage;


<div className="right-0">
<h1 className="text-2xl font-bold mb-4">Host Reviews</h1>
{/* <div id="reviewsContainer">
  {reviews.map((review, index) => (
    <Review
      key={index}
      reviewerName={review.reviewerName}
      reviewText={review.reviewText}
      rating={review.rating}
      date={review.date} // Adjust if date is part of your review data
    />
  ))}
</div> */}

<h2>Reviews</h2>
    {reviews.length > 0 ? (
      reviews.map(review => (
        <div key={review.id} review={review} />
      ))
    ) : (
      <p>No reviews yet.</p>
    )}

</div>