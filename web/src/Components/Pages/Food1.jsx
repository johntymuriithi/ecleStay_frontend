import React, { useState } from 'react';
import Food0 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food0.jpg';
import Food2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food2.jpg';
import Food3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food3.jpg';
import Food4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food4.jpg';
import Food5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food5.jpg';
import Food6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food6.jpg';
import Food7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food7.jpg';
import Food8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food8.jpg';

const Food1 = () => {
  const foodData = [
    {id:0, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food0},
    {id:2, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food2},
    {id:3, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food3},
    {id:4, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food4},
    {id:5, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food5},
    {id:6, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food6},
    {id:7, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food7},
    {id:8, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food8},
 
  ];

  const [visibleFood1Count, setVisibleFood1Count] = useState(6);

  const showMoreFood1 = () => {
    setVisibleFood1Count((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Delicacies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foodData.slice(0, visibleFood1Count).map((food) => (
          <div key={food.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={food.imageUrl} alt={food.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{food.name}</h2>
                <p className="text-gray-600">{food.type}</p>
              </div>
              <p className="text-gray-800 mt-2">{food.price}</p>
            </div>
          </div>
        ))}
        {visibleFood1Count < foodData.length && (
          <div className="flex justify-center items-center col-span-full">
            <button
              onClick={showMoreFood1}
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

export default Food1;


// Food1.jsx

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Import food images
// import Food0 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food0.jpg';
// import Food2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food2.jpg';
// import Food3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food3.jpg';
// import Food4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food4.jpg';
// import Food5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food5.jpg';
// import Food6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food7.jpg';
// import Food7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food8.jpg';
// import Food8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food8.jpg';

// const Food1 = () => {
//   const foodData = [
//     { id: 0, type: "Food Category", name: "Best Delicacies", price: "$54", imageUrl: Food0 },
//     { id: 2, type: "Food Category", name: "Best Delicacies", price: "$54", imageUrl: Food2 },
//     { id: 3, type: "Food Category", name: "Best Delicacies", price: "$54", imageUrl: Food3 },
//     { id: 4, type: "Food Category", name: "Best Delicacies", price: "$54", imageUrl: Food4 },
//     { id: 5, type: "Food Category", name: "Best Delicacies", price: "$54", imageUrl: Food5 },
//     { id: 6, type: "Food Category", name: "Best Delicacies", price: "$54", imageUrl: Food6 },
//     { id: 7, type: "Food Category", name: "Best Delicacies", price: "$54", imageUrl: Food7 },
//     { id: 8, type: "Food Category", name: "Best Delicacies", price: "$54", imageUrl: Food8 },
   
//   ];

//   const [visibleFood1Count, setVisibleFood1Count] = useState(5);

//   const showMoreFood1 = () => {
//     setVisibleFood1Count(prevCount => prevCount + 5);
//   };

//   return (
//     <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//       <h1 className="text-3xl font-bold mb-6 text-center">Delicacies</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {foodData.slice(0, visibleFood1Count).map(food => (
//                     <Link
//                     key={food.id}
//                     to={`/food/${food.id}`} // Navigate to the room detail page with room id
//                     state={{ foodData: food }} // Pass room data as state (optional)
//                   >
                    
//               <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
//               <img
//                 src={food.imageUrl}
//                 alt={food.name}
//                 className="w-full h-48 md:h-64 lg:h-48 object-cover"
//               />
//             <div className="p-4 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h2 className="text-xl font-bold">{food.name}</h2>
//                   <p className="text-gray-600">{food.type}</p>
//                 </div>
//                 <p className="text-gray-800 mt-2">{food.price}</p>
//               </div>
//             </div>
//           </Link>
//         ))}

//         {visibleFood1Count < foodData.length && (
//           <div className="flex justify-center items-center col-span-full">
//             <button
//               onClick={showMoreFood1}
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             >
//               More
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


// export default Food1;


