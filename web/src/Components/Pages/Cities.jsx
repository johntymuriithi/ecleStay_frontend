
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

const Cities = () => {
  const citiesData = [
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

  const [visibleCitiesCount, setVisibleCitiesCount] = useState(6);

  const showMoreCities = () => {
    setVisibleCitiesCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Cities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {citiesData.slice(0, visibleCitiesCount).map((cities) => (
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
        {visibleCitiesCount < citiesData.length && (
          <div className="flex justify-center items-center col-span-full">
            <button
              onClick={showMoreCities}
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

export default Cities;