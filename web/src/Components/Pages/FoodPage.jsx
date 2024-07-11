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




import React, { useContext } from 'react';
import { ServicesContext } from '../ServicesProvider';
import { Link } from 'react-router-dom';
import Contact from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Contact.png';
import HomePage from './HomePage';
     
const FoodPage = () => {
  const services = useContext(ServicesContext);
  const foodData = services.foodData;

  return (
    <div className='text-black bg-red-800'>
      <HomePage data={foodData} />
      
    </div>
  )
}


export default FoodPage;






