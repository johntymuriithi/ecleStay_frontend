
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import beach1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach1.jpg';
import beach2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach2.jpg';
import beach3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach3.jpg';
import beach4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach4.jpg';
import beach5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room5.jpg';
import beach6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/beach6.jpg';

const Beach = () => {
  const beachData = [
    { id: 1, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: beach1 },
    { id: 2, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: beach2 },
    { id: 3, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: beach3 },
    { id: 4, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: beach4 },
    { id: 5, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: beach5 },
    { id: 6, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: beach6 },

  ];

  const [visibleBeachCount, setVisibleBeachCount] = useState(6);

  const showMoreBeach = () => {
    setVisibleBeachCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Suites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beachData.slice(0, visibleBeachCount).map(beach => (
          <Link key={beach.id} to={`/beach/${beach.id}`} state={{ beachData: beach }}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src={beach.imageUrl}
                alt={beach.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{beach.name}</h2>
                <p className="text-gray-600">{beach.type}</p>
                <p className="text-gray-800 mt-2">{beach.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleBeachCount < beachData.length && (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={showMoreBeach}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            More Beach
          </button>
        </div>
      )}
    </div>
  );
};

export default Beach;