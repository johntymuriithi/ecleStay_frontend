
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Terr1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Terr1.jpg';
import Terr2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Terr2.jpg';
import terr3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr3.jpg';
import terr4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr4.jpg';
import terr5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr5.jpg';
import terr6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr6.jpg';

const Mountain = () => {
  const mountainsData = [
    { id: 1, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Terr1 },
    { id: 2, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: Terr2 },
    { id: 3, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: terr3 },
    { id: 4, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: terr4 },
    { id: 5, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: terr5 },
    { id: 6, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: terr6 },

  ];

  const [visibleMountainCount, setVisibleMountainCount] = useState(6);

  const showMoreMountain = () => {
    setVisibleMountainCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Nature</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mountainsData.slice(0, visibleMountainCount).map(mountains => (
          <Link key={mountains.id} to={`/mountains/${mountains.id}`} state={{ mountainsData: mountains }}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src={mountains.imageUrl}
                alt={mountains.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{mountains.name}</h2>
                <p className="text-gray-600">{mountains.type}</p>
                <p className="text-gray-800 mt-2">{mountains.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleMountainCount < mountainsData.length && (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={showMoreMountain}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            More Mountains
          </button>
        </div>
      )}
    </div>
  );
};

export default Mountain;