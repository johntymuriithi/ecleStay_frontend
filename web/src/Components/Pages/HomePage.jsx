import React, { useState } from 'react';
import Food0 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food0.jpg';
import Food7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food7.jpg';
import Food5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food5.jpg';
import villa1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa1.jpg';
import villa4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa4.jpg';
import villa8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa8.jpg';
import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
import Room3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room3.jpg';
import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';
import terr5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr5.jpg';
import terr4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr4.jpg';


const HomePage = () => {
  const servicesData = [
    {id:0, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food0},
    {id:7, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food7},
    {id:5, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food5},
    {id:8, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:villa8},
    {id:1, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:villa1},
    {id:3, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:villa4},
    {id:4, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Room4},
    {id:3, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Room3},
    {id:6, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Room6},
    {id:5, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:terr5},
    {id:4, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:terr4},

   
  ];

  const [visibleServiceCount, setVisibleServiceCount] = useState(8);

  const showMoreServices = () => {
    setVisibleServiceCount(prevCount => prevCount + 8); // Increase by 8 to show more services
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.slice(0, visibleServiceCount).map(service => (
          <div key={service.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col aspect-w-1 aspect-h-1">
            <img src={service.imageUrl} alt={service.name} className="w-full h-48 md:h-64 lg:h-48 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{service.name}</h2>
                <p className="text-gray-600">{service.type}</p>
              </div>
              <p className="text-gray-800 mt-2">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleServiceCount < servicesData.length && (
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={showMoreServices}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            More Services
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
