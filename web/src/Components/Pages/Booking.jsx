
// // Booking.js
// import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { ServicesContext } from '../ServicesProvider';
// import LoginModal from '../LoginModal';
// import { getToken,setToken, clearToken  } from '../../Services/authService';
// import ReviewModal from './ReviewModal';


//  // Import the LoginModal component

// const Booking = () => {
//   const services = useContext(ServicesContext);
//   const servicesData = services.servicesData;
//   const [amount, setPrice] = useState(500);
//   const [guests_number, setGuests] = useState(1);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [city, setCity] = useState('');
//   const [billing, setBilling] = useState('');
//   const [state, setState] = useState('');
//   const [code, setCode] = useState('');
//   const [error, setError] = useState('');
//   const[bookingSuccess, setBookingSuccess] =useState("false");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const { id } = useParams();

//   const service = servicesData.find(service => service.service_id === parseInt(id, 10));
//   // console.log(service);
//   useEffect(() => {
//     // Check if user is logged in on component mount
//     setIsLoggedIn(!!getToken()); // Update isLoggedIn state based on token presence
//   }, []);


//   if (!service) {
//     return <p>Service not found</p>;
//   }

//   const handlePrice = (e) => {
//     e.preventDefault();
//     const numGuests = parseInt(e.target.value, 10);
//     setGuests(numGuests);
//     setPrice(service.price * numGuests);
//   };
//   const handleCity = (e) => {
//     e.preventDefault();
//     setCity(e.target.value)
   
//   };
//   const handleBilling = (e) => {
//     e.preventDefault();
//     setBilling(e.target.value)
   
//   };
//   const handleCode = (e) => {
//     e.preventDefault();
//     setCode(e.target.value)                                                                                                                                                                                                                                                                                                               
   
//   };
//   const handleState = (e) => {
//     e.preventDefault();
//     setState(e.target.value)
   
//   };
//   const handleStartDate = (e) => {
//     e.preventDefault();
//     setStartDate(e.target.value)
   
//   };
//   const handleEndDate = (e) => {
//     e.preventDefault();
//     setEndDate(e.target.value)
   
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = getToken();
    

//     if (!token) {
//       setError('You must be logged in to book a service');
//       setShowLoginModal(true);
//       return;
//     }

//     const bookingData = {
//       amount,
//       service_id: service.service_id,
//       city: city,
//       billing_address: billing,
//        state: state,
//       zip_code: code,
//       guests_number,
//       begin_date: startDate,
//       end_date: endDate,
//     };


//     try {
//       // console.log(bookingData);
//       const response = await fetch('/api/place/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError(errorData.message || 'An error occurred');
//       } else {
//         const responseData = await response.json();
//         console.log('Booking successful:', responseData);
//         setBookingSuccess('Booking Successful');
//          alert('Booking successful!');
      
//       }
//     } catch (error) {
//       setError('Network error');
//       console.error('Network error:', error);
//     }
//   };

//   const loginHandler = (token) => {
//     setToken(token); // Store token in localStorage
//     setIsLoggedIn(true); // Update login state
//     setShowLoginModal(false); // Close login modal
//   };

//   const logoutHandler = () => {
//     clearToken(); // Clear token from localStorage
//     setIsLoggedIn(false); // Update login state
//   };


//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md mt-10">
//         <h1 className="text-3xl font-bold mb-6 text-center">Booking Form</h1>

//         {isLoggedIn ? (
//                   <form onSubmit={handleSubmit}>
//                   {/* Form inputs */}
//                   <button type="submit">Submit Booking</button>
//                 </form>
//               ) : (
//                 <div>
//                   <p>{error}</p>
//                   <button onClick={() => setShowLoginModal(true)}>Login to Book</button>
//                 </div>
//               )}


//         <p className="text-lg font-semibold mb-4 text-center">{service.service_title}</p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Guest */}
//           <div>
//             <label className="block text-lg font-medium text-gray-700">Guests</label>
//             <input
//               type="number"
//               value={guests_number}
//               onChange={handlePrice}
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               min="1"
//             />
//           </div>


//           {/* city */}

//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">city</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               value={city}
//               onChange={handleCity}
              
//             />
//           </div>
//           {/* Billing address */}

//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">billing_Address</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               value={billing}
//               onChange={handleBilling}
              
//             />
//           </div>

//                     {/* state */}
//             <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">State</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               value={state}
//               onChange={handleState}
              
//             />
//           </div>

//           {/* code */}

//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">code</label>
//             <input
//               type="number"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               value={code}
//               onChange={handleCode}
//               // readOnly
//             />
//           </div>

          
//           {/* Date */}

//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">Check-in Date and Time</label>
//             <input
//               type="datetime-local"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               value={startDate}
//               onChange={handleStartDate}
//             />
//           </div>

//                     {/* Check-out Date and Time */}
//                     <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Check-out Date and Time</label>
//             <input
//               type="datetime-local"
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               value={endDate}
//               onChange={handleEndDate}
//             />
//           </div>

//           <div>
//             <label className="block text-lg font-medium text-gray-700">Price</label>
//             <input
//               type="text"
//               value={amount}
//               readOnly
//               className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//             >
//               Book Now
//             </button>
//           </div>
//         </form>
//       </div>
//       <LoginModal
//         show={showLoginModal}
//         onClose={() => setShowLoginModal(false)}
//         onLoginSuccess={() => setIsLoggedIn(true)}
//       />
//            {bookingSuccess && (
//         <ReviewModal
//           show={bookingSuccess}
//           onClose={() => setBookingSuccess(false)}
//           onBookingSuccess={() => setBookingSuccess(false)}
//         />
//       )}

//     </div>
//   );
// };

// export default Booking;


// Booking.js
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ServicesContext } from '../ServicesProvider';
import LoginModal from '../LoginModal';
import { getToken, setToken, clearToken } from '../../Services/authService';

const Booking = () => {
  const services = useContext(ServicesContext);
  const servicesData = services.servicesData;
  const [amount, setPrice] = useState(500);
  const [guests_number, setGuests] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');
  const [billing, setBilling] = useState('');
  const [state, setState] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { id } = useParams();

  const service = servicesData.find(service => service.service_id === parseInt(id, 10));

  useEffect(() => {
    setIsLoggedIn(!!getToken());
  }, []);

  if (!service) {
    return <p>Service not found</p>;
  }

  const handlePrice = (e) => {
    const numGuests = parseInt(e.target.value, 10);
    setGuests(numGuests);
    setPrice(service.price * numGuests);
  };

  const handleCity = (e) => setCity(e.target.value);
  const handleBilling = (e) => setBilling(e.target.value);
  const handleCode = (e) => setCode(e.target.value);
  const handleState = (e) => setState(e.target.value);
  const handleStartDate = (e) => setStartDate(e.target.value);
  const handleEndDate = (e) => setEndDate(e.target.value);

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
      city: city,
      billing_address: billing,
      state: state,
      zip_code: code,
      guests_number,
      begin_date: startDate,
      end_date: endDate,
    };

    try {
      const response = await fetch('/api/place/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred');
      } else {
        const responseData = await response.json();
        console.log('Booking successful:', responseData);
        setBookingSuccess(true);
        // alert('Booking successful!');
      }
    } catch (error) {
      setError('Network error');
      console.error('Network error:', error);
    }
  };

  // const handleBookingSuccess = () => {
  //   setBookingSuccess(false);
  //   clearToken();
  //   setIsLoggedIn(false);
  // };

  const loginHandler = (token) => {
    setToken(token);
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-16">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center ">Booking Form</h1>
        <div className="flex justify-between mb-6">
          <img src="/images/room1.jpg" alt="Room 1" className="w-1/3 h-auto mx-2 rounded-lg" />
          <img src="/images/room2.jpg" alt="Room 2" className="w-1/3 h-auto mx-2 rounded-lg" />
          <img src="/images/room3.jpg" alt="Room 3" className="w-1/3 h-auto mx-2 rounded-lg" />
        </div>

        {isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-medium text-gray-700">Guests</label>
              <input
                type="number"
                value={guests_number}
                onChange={handlePrice}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                min="1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">City</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={city}
                onChange={handleCity}
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Billing Address</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={billing}
                onChange={handleBilling}
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">State</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={state}
                onChange={handleState}
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Code</label>
              <input
                type="number"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={code}
                onChange={handleCode}
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Check-in Date and Time</label>
              <input
                type="datetime-local"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={startDate}
                onChange={handleStartDate}
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Check-out Date and Time</label>
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
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </form>
        ) : (
          <div>
            <p>{error}</p>
            <button onClick={() => setShowLoginModal(true)}>Login to Book</button>
          </div>
        )}
      </div>
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={loginHandler}
      />
    </div>
  );
};

export default Booking;
