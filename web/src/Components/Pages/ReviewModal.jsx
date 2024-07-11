// import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getToken, setToken, clearToken } from '../../Services/authService';
// import { ServicesContext } from '../ServicesProvider';
// import LoginModal from '../LoginModal';

// const ReviewModal = ({ show, onClose, onBookingSuccess }) => {
//   const services = useContext(ServicesContext);
//   const servicesData = services.servicesData;
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [rating, setRating] = useState('');
//   const [cleanliness, setCleanliness] = useState('');
//   const [location, setLocation] = useState('');
//   const [communication, setCommunication] = useState('');
//   const [daysStayed, setDaysStayed] = useState('');
//   const [error, setError] = useState('');
//   const [reviews, setReviews] = useState([]);
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const { id } = useParams();

//   const service = servicesData.find(service => service.service_id === parseInt(id, 10));

//   useEffect(() => {
//     setIsLoggedIn(!!getToken());
//   }, []);

//   if (!service) {
//     return <p>Service not found</p>;
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = getToken();

//     if (!token) {
//       setError('You must be logged in to submit a review');
//       setShowLoginModal(true);
//       return;
//     }

//     const reviewData = {
//       name,
//       host_id: service.host_id,
//       service_id: service.service_id,
//       description,
//       rating,
//       cleanliness,
//       location,
//       communication,
//       days_stayed: daysStayed,
//     };

//     try {
//       const response = await fetch('/api/review/service', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(reviewData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError(errorData.message || 'An error occurred');
//       } else {
//         const responseData = await response.json();
//         console.log('Review submitted successfully:', responseData);
//         setReviews([...reviews, responseData]);
//         onBookingSuccess(); // Trigger the booking success action
//         onClose(); // Close the modal after successful submission
//       }
//     } catch (error) {
//       setError('Network error');
//       console.error('Network error:', error);
//     }
//   };

//   const loginHandler = (token) => {
//     setToken(token);
//     setIsLoggedIn(true);
//     setShowLoginModal(false);
//   };

//   const logoutHandler = () => {
//     clearToken();
//     setIsLoggedIn(false);
//   };

//   return (
//     show && (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
//           <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
//           {isLoggedIn ? (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Description</label>
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Rating</label>
//                 <input
//                   type="number"
//                   value={rating}
//                   onChange={(e) => setRating(e.target.value)}
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   min="1"
//                   max="5"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Cleanliness</label>
//                 <input
//                   type="number"
//                   value={cleanliness}
//                   onChange={(e) => setCleanliness(e.target.value)}
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   min="1"
//                   max="5"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Location</label>
//                 <input
//                   type="number"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   min="1"
//                   max="5"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Communication</label>
//                 <input
//                   type="number"
//                   value={communication}
//                   onChange={(e) => setCommunication(e.target.value)}
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   min="1"
//                   max="5"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Days Stayed</label>
//                 <input
//                   type="number"
//                   value={daysStayed}
//                   onChange={(e) => setDaysStayed(e.target.value)}
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   min="1"
//                   required
//                 />
//               </div>
//               {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//               <div className="mt-6 flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className="py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//                 >
//                   Submit Review
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <div>
//               <p>{error}</p>
//               <button onClick={() => setShowLoginModal(true)}>Login to Submit Review</button>
//             </div>
//           )}
//           <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} onLogin={loginHandler} />
//         </div>
//       </div>
//     )
//   );
// };

// export default ReviewModal;


import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getToken } from '../../Services/authService';
import { ServicesContext } from '../ServicesProvider';

const ReviewModal = ({ show, onClose, onBookingSuccess }) => {
  const services = useContext(ServicesContext);
  const servicesData = services.servicesData;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [cleanliness, setCleanliness] = useState('');
  const [location, setLocation] = useState('');
  const [communication, setCommunication] = useState('');
  const [daysStayed, setDaysStayed] = useState('');
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const service = servicesData.find(service => service.service_id === parseInt(id, 10));

  useEffect(() => {
    if (!service) {
      setError('Service not found');
    }
  }, [service]);

  if (!service) {
    return <p>Service not found</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();

    if (!token) {
      setError('You must be logged in to submit a review');
      return;
    }

    const reviewData = {
      name,
      host_id: service.host_id,
      service_id: service.service_id,
      description,
      rating,
      cleanliness,
      location,
      communication,
      days_stayed: daysStayed,
    };

    try {
      const response = await fetch('/api/review/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred');
      } else {
        const responseData = await response.json();
        console.log('Review submitted successfully:', responseData);
        setReviews([...reviews, responseData]);
        onBookingSuccess(); // Trigger the booking success action
        onClose(); // Close the modal after successful submission
      }
    } catch (error) {
      setError('Network error');
      console.error('Network error:', error);
    }
  };

  return (
    show && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Rating</label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                min="1"
                max="5"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Cleanliness</label>
              <input
                type="number"
                value={cleanliness}
                onChange={(e) => setCleanliness(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                min="1"
                max="5"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Location</label>
              <input
                type="number"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                min="1"
                max="5"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Communication</label>
              <input
                type="number"
                value={communication}
                onChange={(e) => setCommunication(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                min="1"
                max="5"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Days Stayed</label>
              <input
                type="number"
                value={daysStayed}
                onChange={(e) => setDaysStayed(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                min="1"
                required
              />
            </div>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ReviewModal;
