import React, { useState } from 'react';
import City1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/City1.jpg';
import City2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/City2.jpg';
import city3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city3.jpg';
import city4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city4.jpg';
import city5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city5.jpg';
import city6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city6.jpg';
import city7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city7.jpg';
import city8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city8.jpg';

const CitiesPage = () => {
  const citiesData = [
    {
      id: 1,
      type: 'Hotel Suite',
      name: 'Deluxe Suite',
      price: '$250 per night',
      imageUrl: City1,
    },
    {
      id: 2,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$1500 per month',
      imageUrl: City2,
    },
    {
      id: 3,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: city3,
    },
    {
      id: 4,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: city4,
    },
    {
      id: 5,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: city5,
    },
    {
      id: 6,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: city6,
    },
    {
        id: 7,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: city7,
      },
      {
        id: 8,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: city8,
      },
    
  ];

  const [visibleCitiesPageCount, setVisibleCitiesPageCount] = useState(6);

  const showMoreCitiesPage = () => {
    setVisibleCitiesPageCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {citiesData.slice(0, visibleCitiesPageCount).map((cities) => (
          <div key={cities.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={cities.imageUrl} alt={cities.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{cities.name}</h2>
                <p className="text-gray-600">{cities.type}</p>
              </div>
              <p className="text-gray-800 mt-2">{cities.price}</p>
            </div>
          </div>
        ))}
        {visibleCitiesPageCount < citiesData.length && (
          <div className="flex justify-center items-center col-span-full">
            <button
              onClick={showMoreCitiesPage}
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

export default CitiesPage;


import React, { useState } from 'react';
import Room1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room1.jpg';
import Room2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room2.jpg';
import Room3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room3.jpg';
import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';
import Room5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room5.jpg';
import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
import Room7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room7.jpg';
import Room8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room8.jpg';
import Room9 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room9.jpg';
import Room10 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room10.jpg';

const Rooms = () => {
  const roomsData = [
    {
      id: 1,
      type: 'Hotel Suite',
      name: 'Deluxe Suite',
      price: '$250 per night',
      imageUrl: Room1,
    },
    {
      id: 2,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$1500 per month',
      imageUrl: Room2,
    },
    {
      id: 3,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room3,
    },
    {
      id: 4,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room4,
    },
    {
      id: 5,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room5,
    },
    {
      id: 6,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: Room6,
    },
    {
        id: 7,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: Room7,
      },
      {
        id: 8,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: Room8,
      },
      {
        id: 9,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: Room9,
      },
      {
        id: 10,
        type: 'Apartment Suite',
        name: 'Luxury Apartment',
        price: '$600 per month',
        imageUrl: Room10,
      },
    
  ];

  const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);

  const showMoreRooms = () => {
    setVisibleRoomsCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roomsData.slice(0, visibleRoomsCount).map((cities) => (
          <div key={rooms.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={rooms.imageUrl} alt={rooms.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{rooms.name}</h2>
                <p className="text-gray-600">{rooms.type}</p>
              </div>
              <p className="text-gray-800 mt-2">{rooms.price}</p>
            </div>
          </div>
        ))}
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

const roomsData = [
    // ... other room objects
    {
      id: 8,
      date: '21st, July 2024',
      name: 'Zanzibar',
      price: '$600 per month',
      imageUrl: Room8,
    },
    // ... any additional room objects
  ];
  
  const [visibleRoomsCount, setVisibleRoomsCount] = useState(6);
  
  const showMoreRooms = () => {
    setVisibleRoomsCount((prevCount) => prevCount + 6);
  };
  
  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Best Choices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roomsData.slice(0, visibleRoomsCount).map((room) => (
          <div key={room.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={room.imageUrl} alt={room.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{room.name}</h2>
              <p className="text-gray-600">{room.date}</p>
              <p className="text-gray-800 mt-2">{room.price}</p>
            </div>
          </div>
        ))}
        {visibleRoomsCount < roomsData.length && (
          <div className="flex justify-center items-center col-span-full">
            <button
              onClick={showMoreRooms}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
  
  export default Rooms;

import React, { useState } from 'react';
import beach1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach1.jpg';
import beach2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach2.jpg';
import beach3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach3.jpg';
import beach4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach4.jpg';
import beach5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach5.jpg';
import beach6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach6.jpg';

const Beach = () => {
  const beachData = [
    {
      id: 1,
      type: 'Hotel Suite',
      name: 'Deluxe Suite',
      price: '$250 per night',
      imageUrl: beach1,
    },
    {
      id: 2,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$1500 per month',
      imageUrl: beach2,
    },
    {
      id: 3,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: beach3,
    },
    {
      id: 4,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: beach4,
    },
    {
      id: 5,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: beach5,
    },
    {
      id: 6,
      type: 'Apartment Suite',
      name: 'Luxury Apartment',
      price: '$600 per month',
      imageUrl: beach6,
    },
   
    
  ];

  const [visibleBeachCount, setVisibleBeachCount] = useState(6);

  const showMoreBeach = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {beachData.slice(0, visibleBeachCount).map((beach) => (
          <div key={beach.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={beach.imageUrl} alt={beach.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{beach.name}</h2>
                <p className="text-gray-600">{beach.type}</p>
              </div>
              <p className="text-gray-800 mt-2">{beach.price}</p>
            </div>
          </div>
        ))}
        {visibleBeachCount < beachData.length && (
          <div className="flex justify-center items-center col-span-full">
            <button
              onClick={showMoreBeach}
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

export default Beach;


       {/* Reservation Form  */}
       <div className="mt-8 bg-white p-6 rounded-xl md:rounded-lg w-1/2">
       <h2 className="font-bold text-xl">KSH 35666</h2>
       <form className="flex flex-col items-center">
         <input
           className="w-1/2 md:w-full p-2 mb-4 border border-gray-300 rounded"
           type="date"
           placeholder="Check In"
         />
         <input
           className="w-1/2 p-2 mb-4 border border-gray-300 rounded"
           type="date"
           placeholder="Check Out"
         />
         <input
           className="w-1/2 p-2 mb-4 border border-gray-300 rounded"
           type="number"
           placeholder="Guests"
         />

       </form>
     </div>