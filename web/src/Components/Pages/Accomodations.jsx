
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Room9 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room9.jpg';
import Room8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room8.jpg';
import Room7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room7.jpg';
import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
import Room5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room5.jpg';
import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';
import Room10 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room10.jpg';

const Accomodations = () => {
  const roomsData = [



    { id: 5, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room5 },
    { id: 7, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room7 },
    { id: 6, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room6 },
    { id: 4, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room4 },
    { id: 8, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room8 },
    { id: 9, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room9 },
    { id: 10, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Room10},
  ];

  const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);

  const showMoreRooms = () => {
    setVisibleRoomsCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomsData.slice(0, visibleRoomsCount).map(room => (
          <Link key={room.id} to={`/room/${room.id}`} state={{ roomData: room }}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{room.name}</h2>
                <p className="text-gray-600">{room.type}</p>
                <p className="text-gray-800 mt-2">{room.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleRoomsCount < roomsData.length && (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={showMoreRooms}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            More 
          </button>
        </div>
      )}
    </div>
  );
};

export default Accomodations;