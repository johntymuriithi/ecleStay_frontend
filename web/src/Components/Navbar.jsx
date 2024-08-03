import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import money from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/money.png';
import weather from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/weather.png';
import { getUserPic } from '../Services/authService';
import { FaRegUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const goToProfile=() =>[navigate('/profile')]
  
  const getData = async () => {
    try {
      const response = await fetch('api/show/categories',
        {
          headers: {
            "ngrok-skip-browser-warning": '69420',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${'token'}`,
          },
        }
      );
      
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log(data)
        setData(data);
      } else {
        const responseText = await response.text();
        console.error('Response content type:', contentType);
        console.error('Response text:', responseText);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error while getting products', error);
    }
  };
  
  useEffect(() => {
    getData()
  },[]);
  
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  
  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
  <nav className="bg-white md:h-36 fixed top-0 h-28  w-full  z-index: 1000 flex items-center justify-center  border-b border-gray-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center h-full ">
        <Link to="/HomePage">
         {/* <img
          className=" h-8 w-8 md:h-14 md:w-14 lg:h-16 lg:w-16"
          src=""
          alt="EcleStay"
         /> */}
          <h3 className='font-bold text-black'>EcleStay</h3>
       </Link>
      </div>
        
        {/* Services */}
        <div className="hidden sm:flex flex-1 items-center justify-center">
          <div className="flex mx-auto flex-col items-center justify-center bg-white rounded-full shadow-lg p-4 space-y-0 sm:flex-row sm:items-stretch sm:justify-center ">
            {data.map((category) => (
              <Link to={`/${category.category_name.toLowerCase()}`} 
                key={category.category_id} 
                className="rounded-md px-7 py-2 text-xl font-medium text-black hover:bg-gray-700 hover:text-white"
                >
               {category.category_name}
              </Link>
            ))}
          </div>
        </div>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center mt-28 md:mr-60 mr-32 mb-16 px-4">
              <div className="flex flex-col rounded-md max-w-md space-y-2 mb-6">
                <Link to="/host-registration" className="w-full">
                  <button className="bg-gray-400 text-sm hover:bg-black text-white font-bold md:py-2 md:px-4 py-1 px-2 rounded-sm w-full">
                    Become Host
                  </button>
                </Link>

              </div>
            </div>
                  
            {/* icons */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 lg:pr-8">
              
              {/* weather */}
               <Link to="/weather">
                  <button
                    type="button"
                    className="relative rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                    <span className="sr-only">View weather</span>
                    <img src={weather}  alt="Weather icon" className="h-6 w-6" />
                  </button>
                </Link>
                
              {/* Currency */}
               <Link to="/currency">
                  <button
                    type="button"
                    className="relative p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                   >
                    <span className="sr-only">Money</span>
                    <img className="size-5 h-6 w-6" src={money} alt="Currency Selector" />
                  </button>
                </Link>
                        
               {/* DropDown */}
                <div className="relative ml-3 style={{ zIndex: 50 }}" ref={dropdownRef}>
                  <button
                      type="button"
                      className="relative flex rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 z-50"
                      id="user-menu-button"
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      onClick={handleDropdownToggle}
                    >
                      <span className="sr-only">Open user menu</span>
                      {getUserPic() ? (<img
                      className="h-8 w-8 rounded-full"
                      src={ getUserPic() }
                      alt="user pic"
                      />) :(<FaRegUserCircle style={{ color: '', fontSize: '50px' }}/>)}
                  </button> 
                            
                  {isDropdownOpen && (
                    <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50'>
                       <div className="py-1 max-h-60 overflow-y-auto"
                       role="menu"
                       aria-orientation="vertical"
                       aria-labelledby="user-menu-button"
                       tabIndex="-1"
                       >
                        
                {/* Profile dropdown items */}
                 <Link to="/profile">
                    <button onClick={goToProfile}
                        type="button"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >Profile
                    </button>
                  </Link>
                       
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="0">
                     Login
                  </Link>
                                
                  <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="1">
                         LogOut
                  </Link>
                                
                  <Link to="/contact-us" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" >
                        ContactUs
                  </Link>
                                                             
                  <Link to="/sign-up" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="2">
                         SignUp
                  </Link>
                                
                      </div>
                      </div>
                  )}
                </div>
            </div>
                              
                {/* Mobile drop down */}
            <div className="absolute inset-y-10 left-20 flex items-center sm:hidden">
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

                <div 
                    id="mobile-menu"
                    className={`absolute top-full left-0 mt-2 w-48 bg-gray-500 text-white rounded-md shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                    
                 >
                    <ul className="py-2 overflow-y-auto max-h-10">
                    {data.map((category) => (
                    <li key={category.category_id}>
                  <Link
                    to={`/${category.category_name.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    {category.category_name}
                  </Link>
                    </li>
               ))}
                 </ul>
   </div>
 </div>
</div>
</nav>
);
};

export default Navbar;

       