
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import villa1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa1.jpg';
import villa2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa2.jpg';
import villa3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa3.jpg';
import villa4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa4.jpg';
import villa5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa5.jpg';
import villa6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa6.jpg';
import villa7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa7.jpg';
import villa8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa8.jpg';

const Villa = () => {
  const villaData = [
    { id: 1, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: villa1 },
    { id: 2, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: villa2 },
    { id: 3, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: villa3 },
    { id: 4, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: villa4 },
    { id: 5, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: villa5 },
    { id: 6, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: villa6 },
    { id: 7, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: villa7 },
    { id: 8, type: 'Apartment Suite', name: 'Luxury Apartment', price: '$600 per month', imageUrl: villa8 }, 
  ];

  const [visibleVillaCount, setVisibleVillaCount] = useState(6);

  const showMoreVilla = () => {
    setVisibleVillaCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Best Choice</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {villaData.slice(0, visibleVillaCount).map(villa => (
          <Link key={villa.id} to={`/villa/${villa.id}`} state={{ villaData: villa }}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src={villa.imageUrl}
                alt={villa.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{villa.name}</h2>
                <p className="text-gray-600">{villa.type}</p>
                <p className="text-gray-800 mt-2">{villa.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleVillaCount < villaData.length && (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={showMoreVilla}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            More Villa
          </button>
        </div>
      )}
    </div>
  );
};

export default Villa;