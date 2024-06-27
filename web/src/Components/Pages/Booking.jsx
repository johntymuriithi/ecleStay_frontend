
// import React, {useContext, useState } from 'react';
// import { useParams} from 'react-router-dom';
// import { ServicesContext } from '../ServicesProvider';

// const Booking = () => {
//   const services = useContext(ServicesContext);
//   const servicesData = services.servicesData;
//   const [price, setPrice]  =useState(500);
//   const { id } = useParams();
 
//   const service = servicesData.find(service => service.service_id === parseInt(id, 10));
//   console.log(service);

//   if (!service) {
//     return <p>Service not found</p>;
//   }

//   const handlePrice = (e) => {
//     e.preventDefault();

//     setPrice(service.price * e.target.value);
//   }

//   return (
//     <div className="min-h-screen bg-blue-500 py-12 px-4 ">
//       <div className='bg-white md:ml-8 ml-0 md:mr-8 mr-0'>
//         {/* Title */}
//         <div className="text-center">
//           <h1 className="text-3xl font-bold mb-4 mt-4">Booking Page</h1>
//           <p className="text-gray-600 mb-8">Experience something new every moment</p>
//         </div>

//         {/* Rooms */}
//         <div className="flex justify-center md:space-x-4 mb-8">

//           {service.images.map((image, index) => (
//             <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg">
//               <img className="w-full" src={image.service_image} alt={service.service_name} />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{service.service_name}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Booking Form */}
//         <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg ">
//                 {/* Amount */}
//         <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">amount</label>
//             <input
//               type="text"
//               className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={price}
//               disabled
              
//             />
//           </div>


//           {/* City */}
//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">city</label>
//             <input
//               type="text"
//               className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={service.city}
              
//             />
//           </div>

//           {/* billing address */}

//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">billing_Address</label>
//             <input
//               type="text"
//               className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={service.billing_address}
              
//             />
//           </div>

//           {/* state */}
//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">State</label>
//             <input
//               type="text"
//               className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={service.state}
              
//             />
//           </div>

//           {/* code */}

//           <div className="mb-4">
//             <label className="block text-lg font-medium text-gray-700">state</label>
//             <input
//               type="number"
//               className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={service.zip_code}
//               // readOnly
//             />
//           </div>

//           {/* Number of Guests */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
//             <input
//               type="number"
//               className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               onChange={handlePrice}
//               // value={service.guests}
              
//             />
//           </div>

//           {/* Check-in Date and Time */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Check-in Date and Time</label>
//             <input
//               type="datetime-local"
//               className="form-input mt-1 block w-full text-lg rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 border-black border-2"
//               defaultValue={service.start_date}
//             />
//           </div>

//           {/* Check-out Date and Time */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Check-out Date and Time</label>
//             <input
//               type="datetime-local"
//               className="form-input mt-1 block w-full border-black border-2 text-lg rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               defaultValue={service.end_date}
//             />
//           </div>

          
//           {/* Submit Button */}
//           <div className="text-center">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;



//import React, { useContext, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ServicesContext } from '../ServicesProvider';


// const Booking = () => {
//   const services = useContext(ServicesContext);
//   const servicesData = services.servicesData;
//   const [price, setPrice] = useState(500);
//   const [guests, setGuests] = useState(1);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [error, setError] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const { id } = useParams();

//   const service = servicesData.find(service => service.service_id === parseInt(id, 10));
//   console.log(service);

//   if (!service) {
//     return <p>Service not found</p>;
//   }

//   const handlePrice = (e) => {
//     e.preventDefault();
//     const numGuests = parseInt(e.target.value, 10);
//     setGuests(numGuests);
//     setPrice(service.price * numGuests);
//   };




//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const bookingData = {
//       price,
//       city: service.city,
//       billing_address: service.billing_address,
//       state: service.state,
//       zip_code: service.zip_code,
//       guests,
//       start_date: startDate,
//       end_date: endDate,
//     };

//     try {
//       const response = await fetch('/api/place/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError(errorData.message || 'An error occurred');
//       } else {
//         const responseData = await response.json();
//         console.log('Booking successful:', responseData);
//         // Optionally navigate or give user feedback
//       }
//     } catch (error) {
//       setError('Network error');
//       console.error('Network error:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-500 py-12 px-4">
//       <div className='bg-white md:ml-8 ml-0 md:mr-8 mr-0'>
//         <div className="text-center">
//           <h1 className="text-3xl font-bold mb-4 mt-4">Booking Page</h1>
//           <p className="text-gray-600 mb-8">Experience something new every moment</p>
//         </div>
//         <div className="flex justify-center md:space-x-4 mb-8">
//           {service.images.map((image, index) => (
//             <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg">
//               <img className="w-full" src={image.service_image} alt={service.service_name} />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{service.service_name}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
//           <form onSubmit={handleSubmit}>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <div className="mb-4">
//               <label className="block text-lg font-medium text-gray-700">Amount</label>
//               <input
//                 type="text"
//                 className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg"
//                 value={price}
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-medium text-gray-700">City</label>
//               <input
//                 type="text"
//                 className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg"
//                 value={service.city}
                
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-medium text-gray-700">Billing Address</label>
//               <input
//                 type="text"
//                 className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg"
//                 value={service.billing_address}
                
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-medium text-gray-700">State</label>
//               <input
//                 type="text"
//                 className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg"
//                 value={service.state}
                
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-lg font-medium text-gray-700">Zip Code</label>
//               <input
//                 type="number"
//                 className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg"
//                 value={service.zip_code}
                
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
//               <input
//                 type="number"
//                 className="form-input mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg"
//                 onChange={handlePrice}
//                 value={guests}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Check-in Date and Time</label>
//               <input
//                 type="datetime-local"
//                 className="form-input mt-1 block w-full text-lg rounded-md shadow-sm border-black border-2"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Check-out Date and Time</label>
//               <input
//                 type="datetime-local"
//                 className="form-input mt-1 block w-full text-lg rounded-md shadow-sm border-black border-2"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//               />
//             </div>
//             <div className="text-center">
//               <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;



// Booking.js
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServicesContext } from '../ServicesProvider';
import LoginModal from '../LoginModal';
 // Import the LoginModal component

const Booking = () => {
  const services = useContext(ServicesContext);
  const servicesData = services.servicesData;
  const [price, setPrice] = useState(500);
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { id } = useParams();

  const service = servicesData.find(service => service.service_id === parseInt(id, 10));
  // console.log(service);

  if (!service) {
    return <p>Service not found</p>;
  }

  const handlePrice = (e) => {
    e.preventDefault();
    const numGuests = parseInt(e.target.value, 10);
    setGuests(numGuests);
    setPrice(service.price * numGuests);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setError('You must be logged in to book a service');
      setShowLoginModal(true);
      return;
    }

    const bookingData = {
      price,
      city: service.city,
      billing_address: service.billing_address,
      state: service.state,
      zip_code: service.zip_code,
      guests,
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const response = await fetch('/api/place/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred');
      } else {
        const responseData = await response.json();
        console.log('Booking successful:', responseData);
      }
    } catch (error) {
      setError('Network error');
      console.error('Network error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Booking Form</h1>
        <p className="text-lg font-semibold mb-4 text-center">{service.service_title}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">Guests</label>
            <input
              type="number"
              value={guests}
              onChange={handlePrice}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              min="1"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Price</label>
            <input
              type="text"
              value={price}
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



