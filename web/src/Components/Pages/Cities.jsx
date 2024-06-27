

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import City1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/City1.jpg';
import city2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city2.jpg';
import city3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city3.jpg';
import city4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city4.jpg';
import city5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city5.jpg';
import city6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city6.jpg';
import city7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city7.jpg';
import city8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/city8.jpg';

const Cities = () => {
  const citiesData = [
    {id:1, type:"Capital City", name:"Nairobi",price:"$546", imageUrl:City1, },
    {id:2, type:"Capital City", name:"Nairobi",price:"$546", imageUrl:city2, },
    {id:3, type:"Capital City", name:"Nairobi",price:"$546", imageUrl:city3, },
    {id:4, type:"Capital City", name:"Nairobi",price:"$546", imageUrl:city4, },
    {id:5, type:"Capital City", name:"Nairobi",price:"$546", imageUrl:city5, },
    {id:6, type:"Capital City", name:"Nairobi",price:"$546", imageUrl:city6, },
    {id:7, type:"Capital City", name:"Nairobi",price:"$546", imageUrl:city7, },
    {id:8, type:"Capital City", name:"Nairobi",price:"$546", imageUrl:city8, },
    
  ];

  const [visibleCitiesCount, setVisibleCitiesCount] = useState(6);

  const showMoreCities = () => {
    setVisibleCitiesCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Trending Cities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {citiesData.slice(0, visibleCitiesCount).map(cities => (
          <Link key={cities.id} to={`/cities/${cities.id}`} state={{ citiesData: cities }}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src={cities.imageUrl}
                alt={cities.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{cities.name}</h2>
                <p className="text-gray-600">{cities.type}</p>
                <p className="text-gray-800 mt-2">{cities.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleCitiesCount < citiesData.length && (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={showMoreCities}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            More Cities
          </button>
        </div>
      )}
    </div>
  );
};

export default Cities;