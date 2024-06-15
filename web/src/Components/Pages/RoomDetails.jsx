// import React from 'react';
// import { useLocation, useParams } from 'react-router-dom';

// const RoomDetails = () => {
//   const location = useLocation();
//   const {  } = useParams();
  
//   // Add console log to debug the location object
//   console.log('Location:', location);

//   // Check if location.state is defined and destructure roomData, otherwise use an empty object
//   const roomsData = location.state ? location.state.roomsData : null;

//   // Add a console log to debug roomData
//   console.log('Room Data:', roomsData);

//   // Handle the case where roomData is not passed or is invalid
//   if (!roomsData) {
//     return <div>Room not found</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-3xl font-bold mb-4">{roomsData.name}</h2>
//       <img src={roomsData.imageUrl} alt={roomsData.name} className="w-full h-auto mb-4" />
//       <p className="text-lg mb-2"><strong>Type:</strong> {roomsData.type}</p>
//       <p className="text-lg mb-2"><strong>Price:</strong> {roomsData.price}</p>
//       <form className="bg-white p-4 shadow-md rounded-lg">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Check-In Date:</label>
//           <input type="date" className="border rounded w-full py-2 px-3 text-gray-700" />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Check-Out Date:</label>
//           <input type="date" className="border rounded w-full py-2 px-3 text-gray-700" />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Reserve</button>
//       </form>
//       <div className="mt-4">
//         <h3 className="text-2xl font-bold">Host Information</h3>
//         <p className="text-lg">Host Name: John Doe</p>
//         <p className="text-lg">Contact: john.doe@example.com</p>
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;


import React from 'react';
import { useParams } from 'react-router-dom';
import { useRoomContext } from './RoomContext'; // Adjust the import path as needed

const RoomDetails = () => {
  const { id } = useParams();
  const { getRoomById } = useRoomContext();
  const roomsData = getRoomById(id);

  // Debugging log to verify roomData
  console.log('Room Data:', roomsData);

  // Handle the case where roomData is not found
  if (!roomsData) {
    return <div>Room not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{roomsData.name}</h2>
      <img src={roomsData.imageUrl} alt={roomsData.name} className="w-full h-auto mb-4" />
      <p className="text-lg mb-2"><strong>Type:</strong> {roomsData.type}</p>
      <p className="text-lg mb-2"><strong>Price:</strong> {roomsData.price}</p>
      <form className="bg-white p-4 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Check-In Date:</label>
          <input type="date" className="border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Check-Out Date:</label>
          <input type="date" className="border rounded w-full py-2 px-3 text-gray-700" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Reserve</button>
      </form>
      <div className="mt-4">
        <h3 className="text-2xl font-bold">Host Information</h3>
        <p className="text-lg">Host Name: John Doe</p>
        <p className="text-lg">Contact: john.doe@example.com</p>
      </div>
    </div>
  );
};

export default RoomDetails;






