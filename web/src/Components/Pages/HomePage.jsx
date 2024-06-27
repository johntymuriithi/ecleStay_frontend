// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Food0 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food0.jpg';
// import Food7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food7.jpg';
// import Food5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food5.jpg';
// import villa1 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa1.jpg';
// import villa4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa4.jpg';
// import villa8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/villa8.jpg';
// import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
// import Room3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room3.jpg';
// import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';
// import terr5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr5.jpg';
// import terr4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/terr4.jpg';


// const HomePage = () => {
//   const servicesData = [
//     {id:0, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food0},
//     {id:7, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food7},
//     {id:5, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Food5},
//     {id:8, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:villa8},
//     {id:1, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:villa1},
//     {id:3, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:villa4},
//     {id:4, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Room4},
//     {id:10, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Room3},
//     {id:6, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:Room6},
//     {id:5, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:terr5},
//     {id:4, type:"Food Category", name:"Best Delicacies", price:"$54", imageUrl:terr4},

   
//   ];

//   const [visibleServiceCount, setVisibleServiceCount] = useState(8);

//   const showMoreServices = () => {
//     setVisibleServiceCount(prevCount => prevCount + 8); // Increase by 8 to show more services
//   };

//   return (

//     <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
//     <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Services</h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {servicesData.slice(0, visibleServiceCount).map(service => (
//         <div key={service.id} className="border rounded-lg overflow-hidden shadow-lg">
//           <img src={service.imageUrl} alt={service.name} className="w-full h-72 object-cover" />
//           <div className="p-4">
//             <h2 className="text-xl font-bold">{service.name}</h2>
//             <p className="text-gray-600">{service.type}</p>
//             <p className="text-gray-800 mt-2">{service.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     {visibleServiceCount < servicesData.length && (
//       <div className="flex justify-center items-center mt-6">
//         <button
//           onClick={showMoreServices}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//         >
//           More Services
//         </button>
//       </div>
//     )}
//         <footer className=" text-white mt-12 p-4">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-2xl font-bold">EcleStay</h2>
//           <p className="text-gray-400">123 Street, City, Country</p>
//           <p className="text-gray-400">Phone: (123) 456-7890</p>
//           <p className="text-gray-400">Email: info@eclestay.com</p>
//         </div>
//         <div className="container mx-auto mt-4 md:mt-0 flex flex-col items md:flex-row md:space-x-6">
//           <a href="/contact-us" className="text-gray-400 hover:text-white">
//             Contact Us
//           </a>
//           <a href="/about-us" className="text-gray-400 hover:text-white">
//             About Us
//           </a>
//           <a href="/policy" className="text-gray-400 hover:text-white">
//             Policy
//           </a>
//         </div>
//         <div className="flex space-x-6">
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//             Facebook
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//             Twitter
//           </a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//             Instagram
//           </a>
//         </div>
//       </div>
//       <div className="mt-4 text-center text-gray-500">
//         <p>&copy; 2024 EcleStay. All rights reserved.</p>
//       </div>
//     </footer>
//   </div>

//   );
// };

// export default HomePage;


// HomePage.js
// HomePage.js
import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { ServicesContext } from '../ServicesProvider';



const HomePage = () => {
  const [visibleServiceCount, setVisibleServiceCount] = useState(8);
  const services = useContext(ServicesContext);
  const servicesData = services.servicesData;
  console.log(servicesData);

  const showMoreServices = () => {
    setVisibleServiceCount(prevCount => prevCount + 8); // Increase by 8 to show more services
  };

  return (
    <div className="bg-gray-300 w-full min-h-screen p-4 lg:overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.slice(0, visibleServiceCount).map(service => (

          <div key={service.service_id} className="border rounded-lg overflow-hidden shadow-lg">
            <Link to={`/service/${service.service_id}`}>
              <img src={service.images[0].service_image} alt={service.service_name} className="w-full h-72 object-cover" />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-bold">{service.service_name}</h2>
              {/* come here later */}
              {/* <p className="text-gray-600">{service.type}</p> */}
              <p className="text-gray-800 mt-2">{service.price} {service.pricing_criteria}</p>
              <h6 className="text-xl font-medium">Hosted By <i>{service.hosts['host_name']}</i></h6>
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
      <footer className=" text-white mt-12 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
 
          <div className="container mx-auto mt-4 md:mt-0 flex flex-col items md:flex-row md:space-x-6">
            <a href="/contact-us" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
            <a href="/about-us" className="text-gray-400 hover:text-white">
              About Us
            </a>
            <a href="/policy" className="text-gray-400 hover:text-white">
              Help
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-500 mb-0">
          <p>&copy; 2024 EcleStay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
