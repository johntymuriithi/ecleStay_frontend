// import React from 'react';
// import { useParams } from 'react-router-dom';

// const FoodPage = ({ foodData }) => {
//   const { id } = useParams();
//   const food = foodData.find(item => item.id === parseInt(id));

//   if (!food) {
//     return (
//       <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//         <div className="flex flex-col items-center">
//           <h1 className="text-3xl font-bold">Food Details</h1>
//           <div className="p-4 text-center">
//             <p className="text-red-500">Food not found for id: {id}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//       <div className="flex flex-col items-center">
//         <img src={food.imageUrl} alt={food.name} className="w-full h-64 object-cover" />
//         <div className="p-4 text-center">
//           <h1 className="text-3xl font-bold">{food.name}</h1>
//           <p className="text-gray-600">{food.type}</p>
//           <p className="text-gray-800 mt-2">{food.price}</p>
//           {/* Additional details */}
//           <div className="mt-4">
//             <h2 className="text-xl font-bold">Details:</h2>
//             {/* Add more details like area, reviews, delivery person, availability */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodPage;

// import React, { useEffect, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';

// const FoodPage = ({ foodData }) => {
//   const { id } = useParams();
//   const location = useLocation();
//   const food = foodData.find(item => item.id === parseInt(id));

//   const [hideNavbarAndHero, setHideNavbarAndHero] = useState(false);

//   useEffect(() => {
//     // Logic to hide navbar and hero when FoodPage is mounted
//     if (location.pathname.startsWith('/food/')) {
//       setHideNavbarAndHero(true);
//     } else {
//       setHideNavbarAndHero(false);
//     }

//     // Cleanup function to reset state when component unmounts
//     return () => {
//       setHideNavbarAndHero(false);
//     };
//   }, [location.pathname]);

//   if (!food) {
//     return (
//       <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//         <div className="flex flex-col items-center">
//           <h1 className="text-3xl font-bold">Food Details</h1>
//           <div className="p-4 text-center">
//             <p className="text-red-500">Food not found for id: {id}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//       <div className="flex flex-col items-center">
//         <img src={food.imageUrl} alt={food.name} className="w-full h-64 object-cover" />
//         <div className="p-4 text-center">
//           <h1 className="text-3xl font-bold">{food.name}</h1>
//           <p className="text-gray-600">{food.type}</p>
//           <p className="text-gray-800 mt-2">{food.price}</p>
          
//           {/* Additional details */}
//           <div className="mt-4">
//             <h2 className="text-xl font-bold">Details:</h2>
//             {/* Add more details like area, reviews, delivery person, availability */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodPage;




import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import Food0 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food0.jpg';
import Food2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food2.jpg';
import Food3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food3.jpg';
import Food4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food4.jpg';
import Food5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food5.jpg';
import Contact from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Contact.png';

const FoodPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const foodData = location.state?.foodData;

  useEffect(() => {
    if (!foodData) {
      navigate('/food');
    }
  }, [foodData, navigate]);

  // If roomData is null, render a loading message or nothing
  if (!foodData) {
    return null; // You can render a loading spinner or message here
  }

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <h1 className="text-3xl font-bold ml-10 mt-11 mb-4">Best Satisfaction offer</h1>
      <div className="flex flex-wrap md:ml-10 ml-0">
        {/* Food Details */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img className="mx-auto lg:ml-20 w-[70%] h-auto rounded" src={foodData.imageUrl} alt={foodData.name} />
          <div className="mt-4 mb-4 mx-auto lg:ml-20">
            <p className="font-bold">Nyeri, Kenya</p>
          </div>
          <div className="mb-4 mx-auto lg:ml-20">
            <p className="font-bold">Bed: Double-Bed</p>
            <p>{foodData.bed}</p>
          </div>
          <div className="mb-4 mx-auto lg:ml-20">
            <p className="font-bold">Bathroom: Private</p>
            <p>{foodData.bathroom}</p>
          </div>
          <div className="mb-4 mx-auto lg:ml-20">
            <p className="font-bold">Reviews:</p>
            <div className="flex items-center">
              <p className="mr-2">4.5 Stars</p>
              <div className="flex">
                {[...Array(5)].map((star, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 0c.28 0 .52.11.71.29l1.82 1.82 4.79.7a.944.944 0 0 1 1.11 1.11l-.7 4.79 1.82 1.82a.996.996 0 0 1 0 1.41l-3.59 3.59 1.5 4.63c.12.37-.08.77-.45.89l-4.3 1.92a.944.944 0 0 1-1.17-1.18l1.92-4.3-3.63-3.63a.996.996 0 0 1-.29-.7l-.7-4.79L.3 8.92A.996.996 0 0 1 .29 7.5l1.82-1.82.7-4.79A.996.996 0 0 1 4.8.29L8.92 2.3 9.74.48A.996.996 0 0 1 10 0z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="w-full md:w-1/2 md:pl-3 grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between">
            <img className="w-full h-auto rounded mb-4" src={Food0} alt="Room 9" />
            <img className="w-full h-auto rounded" src={Food2} alt="Room 7" />
          </div>
          <div className="flex flex-col justify-between">
            <img className="w-full h-auto rounded mb-4" src={Food3} alt="Room 8" />
            <img className="w-full h-auto rounded" src={Food4} alt="Room 6" />
          </div>
        </div>
      </div>

      {/* Host Information */}
      <div className="flex items-center mt-4 bg-white p-4">
        <div className="w-1/4 flex justify-center">
          <img className="w-20 h-20 rounded-full" src={Contact} alt="Host Profile" />
        </div>
        <div className="w-3/4 pl-4">
          <p className="font-bold">Host Name</p>
          <p className="font-bold">Phone: 07xxxxxxxx</p>
          <p className="font-bold">Email: host@gmail.com</p>
          <p className="font-bold">Postal Address:</p>
          <p>Description of the host goes here...</p>
        </div>
      </div>

      {/* Hotel Description */}
      <div className="bg-white p-4">
        <p className="font-bold mb-2">Hotel Description:</p>
        <p>Free cancellation after payment</p>
        <p>Hotel in a rental area</p>
        <p>Shared common places</p>
        <p>Meals available at any area within the rental</p>
        <p>Meal payment done after Service</p>
        <p>Relaxation area available</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisi et arcu tincidunt tincidunt vel a sem. In hac habitasse platea dictumst. Integer nec odio. Praesent libero.
        </p>
        <div className="w-1/2 flex justify-center mt-6">
          <Link to="/login" className="bg-blue-500 w-1/2 text-white rounded hover:bg-blue-700 flex items-center justify-center py-2">
            RESERVE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;






