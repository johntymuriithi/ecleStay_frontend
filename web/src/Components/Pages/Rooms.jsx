
// import React, { useState } from 'react';

// import Room10 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room10.jpg';

// const Rooms = () => {
  // const roomsData = [


  //     {       
  //        id: 10,
  //       type: 'Apartment Suite',
  //       name: 'Luxury Apartment',
  //       price: '$600 per month',
  //       imageUrl: Room10,
  //     },


    
  // ];

  // const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);

  // const showMoreRooms = () => {
  //   setVisibleRoomsCount((prevCount) => prevCount + 6);
  // };

//   return (
    // <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      // <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //     {roomsData.slice(0, visibleRoomsCount).map((roomsData) => (
    //       <div key={roomsData.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
    //         <img src={roomsData.imageUrl} alt={roomsData.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
    //         <div className="p-4 flex-1 flex flex-col justify-between">
    //           <div>
    //             <h2 className="text-xl font-bold">{roomsData.name}</h2>
    //             <p className="text-gray-600">{roomsData.type}</p>
    //           </div>
    //           <p className="text-gray-800 mt-2">{roomsData.price}</p>
    //         </div>
    //       </div>
    //     ))}
    //     {visibleRoomsCount < roomsData.length && (
    //       <div className="flex justify-center items-center col-span-full">
    //         <button
    //           onClick={showMoreRooms}
    //           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    //         >
    //           More
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
//   );
// };

// export default Rooms;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Room10 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room10.jpg';

// const Rooms = () => {
//   const roomsData = [
//     {       
//       id: 10,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment',
//       price: '$600 per month',
//       imageUrl: Room10,
//     },
//     // ... add other rooms here
//   ];

//   const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);
//   const navigate = useNavigate();

//   const showMoreRooms = () => {
//     setVisibleRoomsCount((prevCount) => prevCount + 6);
//   };

//   const goToDetailedPage = (roomId) => {
//     navigate(`/detailed/${roomId}`);
//   };

//   return (
//     <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//       <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {roomsData.slice(0, visibleRoomsCount).map((room) => (
//           <div key={room.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer" onClick={() => goToDetailedPage(room.id)}>
//             <img src={room.imageUrl} alt={room.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
//             <div className="p-4 flex-1 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-xl font-bold">{room.name}</h2>
//                 <p className="text-gray-600">{room.type}</p>
//               </div>
//               <p className="text-gray-800 mt-2">{room.price}</p>
//             </div>
//           </div>
//         ))}
//         {visibleRoomsCount < roomsData.length && (
//           <div className="flex justify-center items-center col-span-full">
//             <button onClick={showMoreRooms} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
//               More
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Rooms;





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Room9 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room9.jpg';
// import Room8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room8.jpg';
// import Room7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room7.jpg';
// import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
// import Room5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room5.jpg';
// import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';
// import Room10 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room10.jpg';

// const Rooms = () => {
//   const roomsData = [
//     {
//       id: 10,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment',
//       price: '$600 per month',
//       imageUrl: Room10,
//     },
//     {
//       id: 9,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment',
//       price: '$600 per month',
//       imageUrl: Room9,
//     },
//     {
//       id: 8,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment',
//       price: '$600 per month',
//       imageUrl: Room8,
//     },
//     { id: 5, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room5 },
//     { id: 7, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room7 },
//     { id: 6, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room6 },
//     { id: 4, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room4 },
//   ];

//   const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);

//   const showMoreRooms = () => {
//     setVisibleRoomsCount((prevCount) => prevCount + 6);
//   };

//   return (
//     <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//       <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {roomsData.slice(0, visibleRoomsCount).map((rooms) => (
//           <Link
//             key={rooms.id}
//             to={{
//               pathname: `/room/${rooms.id}`,
//               state: { roomsData: rooms }, // Pass room data as state
//             }}
//           >
//             <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
//               <img
//                 src={rooms.imageUrl}
//                 alt={rooms.name}
//                 className="w-full h-48 md:h-64 lg:h-48 object-cover"
//               />
//               <div className="p-4 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h2 className="text-xl font-bold">{rooms.name}</h2>
//                   <p className="text-gray-600">{rooms.type}</p>
//                 </div>
//                 <p className="text-gray-800 mt-2">{rooms.price}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//         <Link to="/hotelPage">HotelPage</Link>

//         {visibleRoomsCount < roomsData.length && (
//           <div className="flex justify-center items-center col-span-full">
//             <button
//               onClick={showMoreRooms}
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

// export default Rooms;


// Components/Pages/Rooms.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Room9 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room9.jpg';
import Room8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room8.jpg';
import Room7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room7.jpg';
import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
import Room5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room5.jpg';
import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';
import Room10 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room10.jpg';

const Rooms = () => {
  const roomsData = [
    {
      id: 10,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room10,
    },
    {
      id: 9,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room9,
    },
    {
      id: 8,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room8,
    },
    { id: 5, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room5 },
    { id: 7, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room7 },
    { id: 6, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room6 },
    { id: 4, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room4 },
  ];

  const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);

  const showMoreRooms = () => {
    setVisibleRoomsCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roomsData.slice(0, visibleRoomsCount).map((room) => (
          <Link
            key={room.id}
            to={`/room/${room.id}`}
            state={{ roomData: room }} // Pass room data as state
          >
            <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-48 md:h-64 lg:h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold">{room.name}</h2>
                  <p className="text-gray-600">{room.type}</p>
                </div>
                <p className="text-gray-800 mt-2">{room.price}</p>
              </div>
            </div>
          </Link>
        ))}
        <Link to="/hotelPage">HotelPage</Link>

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


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Room9 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room9.jpg';
// import Room8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room8.jpg';
// import Room7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room7.jpg';
// import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
// import Room5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room5.jpg';
// import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';
// import Room10 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room10.jpg';

// const Rooms = () => {
//   const roomsData = [
//     {
//       id: 10,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment 10',
//       price: '$600 per month',
//       imageUrl: Room10,
//       bed: 'Queen Bed',
//       bathroom: 'Private Bathroom',
//     },
//     {
//       id: 9,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment 9',
//       price: '$600 per month',
//       imageUrl: Room9,
//       bed: 'King Bed',
//       bathroom: 'Ensuite Bathroom',
//     },
//     {
//       id: 8,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment 8',
//       price: '$600 per month',
//       imageUrl: Room8,
//       bed: 'Double Bed',
//       bathroom: 'Shared Bathroom',
//     },
//     {
//       id: 7,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment 7',
//       price: '$600 per month',
//       imageUrl: Room7,
//       bed: 'Twin Bed',
//       bathroom: 'Private Bathroom',
//     },
//     {
//       id: 6,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment 6',
//       price: '$600 per month',
//       imageUrl: Room6,
//       bed: 'Queen Bed',
//       bathroom: 'Private Bathroom',
//     },
//     {
//       id: 5,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment 5',
//       price: '$600 per month',
//       imageUrl: Room5,
//       bed: 'King Bed',
//       bathroom: 'Ensuite Bathroom',
//     },
//     {
//       id: 4,
//       type: 'Apartment Suite',
//       name: 'Luxury Apartment 4',
//       price: '$600 per month',
//       imageUrl: Room4,
//       bed: 'Double Bed',
//       bathroom: 'Shared Bathroom',
//     },
//   ];

//   const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);

//   const showMoreRooms = () => {
//     setVisibleRoomsCount((prevCount) => prevCount + 6);
//   };

//   return (
//     <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//       <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {roomsData.slice(0, visibleRoomsCount).map((room) => (
//           <Link
//             key={room.id}
//             to={`/room/${room.id}`} // Navigate to the room detail page with room id
//             state={{ roomData: room }} // Pass room data as state (optional)
//           >
//             <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
//               <img
//                 src={room.imageUrl}
//                 alt={room.name}
//                 className="w-full h-48 md:h-64 lg:h-48 object-cover"
//               />
//               <div className="p-4 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h2 className="text-xl font-bold">{room.name}</h2>
//                   <p className="text-gray-600">{room.type}</p>
//                 </div>
//                 <p className="text-gray-800 mt-2">{room.price}</p>
//               </div>
//             </div>
//           </Link>
//         ))}

//         {visibleRoomsCount < roomsData.length && (
//           <div className="flex justify-center items-center col-span-full">
//             <button
//               onClick={showMoreRooms}
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

// export default Rooms;
