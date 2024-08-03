
import React, { useContext, useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ServicesContext } from '../ServicesProvider';
import LoginModal from '../LoginModal';
import { getToken,setToken, clearToken  } from '../../Services/authService';

const Booking = () => {
  const services = useContext(ServicesContext);
  const servicesData = services.servicesData;
  const navigate = useNavigate();
  const [amount, setAmount] = useState(500);
  const [guests_number, setGuests] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');
  const [billing, setBilling] = useState('');
  const [state, setState] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const[bookingSuccess, setBookingSuccess] =useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { id } = useParams();

  const service = servicesData.find(service => service.service_id === parseInt(id, 10));
  console.log(service)
  const county = service.county.county_id;
  console.log(county)
  // console.log(service);
  useEffect(() => {
    setIsLoggedIn(!!getToken()); 
  }, []);

  if (!service) {
    return <p>Service not found</p>;
  }

    const handlePrice = (e) => {
    e.preventDefault();
    const numGuests = parseInt(e.target.value, 10);
    setGuests(numGuests);
    setAmount(service.price * numGuests);
  };


  const handleCity = (e) => {
    e.preventDefault();
    setCity(e.target.value)
   
  };
  const handleBilling = (e) => {
    e.preventDefault();
    setBilling(e.target.value)
   
  };
  const handleCode = (e) => {
    e.preventDefault();
    setCode(e.target.value)                                                                                                                                                                                                                                                                                                               
   
  };
  const handleState = (e) => {
    e.preventDefault();
    setState(e.target.value)
   
  };
  const handleStartDate = (e) => {
    e.preventDefault();
    setStartDate(e.target.value)
   
  };
  const handleEndDate = (e) => {
    e.preventDefault();
    setEndDate(e.target.value)
   
  };
  const handlePhoneNumber = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value)
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();
    

    if (!token) {
      setError('You must be logged in to book a service');
      setShowLoginModal(true);
      return;
    }

    const bookingData = {
      amount,
      service_id: service.service_id,
      host_id: service.hosts.host_id,
      city: city,
      billing_address: billing,
       state: state,
      zip_code: code,
      guests_number,
      begin_date: startDate,
      end_date: endDate,
      number: phoneNumber,
    };
    console.log(service.hosts.host_id)


    try {
      const response = await fetch('/api/place/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bookingData),
      });
      console.log(response)

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred');
      } else {
        const responseData = await response.json();
        setBookingSuccess(responseData.message);
        navigate('/guide',{ state: {county} })
         alert('Booking successful! Please check your phone for a prompt to Pay the cash');
      
      }
      // console.log('Booking successful:', responseData);
    } catch (error) {
      setError('Network error');
      console.error('Network error:', error);
    }
  };

  const loginHandler = (token) => {
    setToken(token); 
    setIsLoggedIn(true); 
    setShowLoginModal(false); 
  };

  const logoutHandler = () => {
    clearToken(); 
    setIsLoggedIn(false); 
  };


  return (
    <div className="flex flex-col items-center min-h-screen md:pt-32 bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Booking Form</h1>

        {isLoggedIn ? (
                  <form onSubmit={handleSubmit}>
                  {/* Form inputs */}
                  <button type="submit">Submit Booking</button>
                </form>
              ) : (
                <div>
                  <p>{error}</p>
                  <button onClick={() => setShowLoginModal(true)}>Login to Book</button>
                </div>
              )}


        <p className="text-lg font-semibold mb-4 text-center">{service.service_title}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Guest */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Guests</label>
            <input
              type="number"
              value={guests_number}
              onChange={handlePrice}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              
            />
          </div>


          {/* city */}

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">city</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={city}
              onChange={handleCity}
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Phone Number</label>
            <input
             type="tel"
             className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={phoneNumber}
             onChange={handlePhoneNumber}
              placeholder="+1234567890"
              title="Phone number must start with +"
            />
             </div>
          {/* Billing address */}

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">billing_Address</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={billing}
              onChange={handleBilling}
              
            />
          </div>

                    {/* state */}
            <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">State</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={state}
              onChange={handleState}
              
            />
          </div>

          {/* code */}

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">code</label>
            <input
              type="number"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={code}
              onChange={handleCode}
            />
          </div>

          
          {/* Date */}

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Check-in Date and Time</label>
            <input
              type="datetime-local"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={startDate}
              onChange={handleStartDate}
            />
          </div>

                    {/* Check-out Date and Time */}
                    <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Check-out Date and Time</label>
            <input
              type="datetime-local"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={endDate}
              onChange={handleEndDate}
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Price</label>
            <input
              type="text"
              value={amount}
              readOnly
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {bookingSuccess && <p className="text-red-500 text-center mt-4">{bookingSuccess}uu</p>}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={() => setIsLoggedIn(true)}
      />


    </div>
  );
};

export default Booking;





  // const handlePrice = (e) => {
  //   e.preventDefault();
  //   const numGuests = parseInt(e.target.value, 10);
    
  //   if (isNaN(numGuests)) {
  //     setGuests('');
  //     setAmount('');
  //   } else {
  //     setGuests(numGuests);
  //     setAmount(service.price * numGuests);
  //   }
  // };