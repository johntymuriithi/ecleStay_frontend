// // // HomePage.js
// // import React, { useState, useEffect, useContext} from 'react';
// // import { Link } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';

// // const HomePage = ({data}) => {
// //   const navigate = useNavigate();
// //   const [visibleServiceCount, setVisibleServiceCount] = useState(8);


 
// //   const showMoreServices = () => {
// //     setVisibleServiceCount(prevCount => prevCount + 8); // Increase by 8 to show more services
// //   };

// //   return (
// //     <div className="bg-gray-300 w-full h-full px-4 lg:overflow-hidden mt-5 pt-48 md:pt-64 ">
// //       {/* <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Services</h1> */}
// //       <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
// //         {data.slice(0, visibleServiceCount).map(service => (

// //           <div key={service.service_id} className="border rounded-lg overflow-hidden shadow-lg">
// //             <Link to={`/service/${service.service_id}`}>
// //               <img src={service.images[0].service_image} alt={service.service_name} className="w-5/4 h-56 md:h-56  object-cover" />
// //             </Link>
// //             <div className="p-4">
// //               <h2 className="text-xl font-bold">{service.service_name}</h2>
// //               {/* come here later */}
// //               {/* <p className="text-gray-600">{service.type}</p> */}
// //               <p className="text-gray-800 mt-2">{service.price} {service.pricing_criteria}</p>
// //               <h6 className="text-xl font-medium">Hosted By <i>{service.hosts['host_name']}</i></h6>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       {visibleServiceCount < data.length && (
// //         <div className="flex justify-center items-center mt-6">
// //           <button
// //             onClick={showMoreServices}
// //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
// //           >
// //             More Services
// //           </button>
// //         </div>
// //       )}

// //       <footer className=" text-white mt-12 p-4">
// //         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
 
// //           <div className="container mx-auto mt-4 md:mt-0 flex flex-col items md:flex-row md:space-x-6">
// //             <a href="/contact-us" className="text-gray-400 hover:text-white">
// //               Contact Us
// //             </a>
// //             <a href="/about-us" className="text-gray-400 hover:text-white">
// //               About Us
// //             </a>
// //             <a href="/policy" className="text-gray-400 hover:text-white">
// //               Help
// //             </a>
// //           </div>
// //           <div className="flex space-x-6">
// //             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
// //               Facebook
// //             </a>
// //             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
// //               Twitter
// //             </a>
// //             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
// //               Instagram
// //             </a>
// //           </div>
// //         </div>
// //         <div className="mt-4 text-center text-gray-500 mb-0">
// //           <p>&copy; 2024 EcleStay. All rights reserved.</p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default HomePage;



// // HomePage.js
// import React, { useState} from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { Offline, Online } from 'react-detect-offline';
// import Loading from './Loading';
// import Server from './Server';

// const HomePage = ({data}) => {
//   const navigate = useNavigate();
//   const [visibleServiceCount, setVisibleServiceCount] = useState(8);
//   const isLoading = Loading();
//   const serverStatus = Server('api');
//   console.log(data)
  
//   const showMoreServices = () => {
//     setVisibleServiceCount(prevCount => prevCount + 8); // Increase by 8 to show more services
//   };
//   if (isLoading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   if (!serverStatus === 'unavailable') {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         Server is currently unavailable. Please try again later.
//       </div>
//     );
//   }

//   // return (
//     const content = (
//     <div className="bg-gray-300 w-full h-screen px-4 lg:overflow-hidden mt-5 pt-48 md:pt-64 ">
//         <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
//           {data.slice(0, visibleServiceCount).map(service => (
//             <div key={service.service_id} className="border rounded-lg overflow-hidden shadow-lg">
//               <Link to={`/service/${service.service_id}`}>
//               <img src={service.images[0].service_image} alt={service.service_name} className="w-5/4 h-56 md:h-56  object-cover" />
//             </Link>
//             <div className="p-4">
//               <h2 className="text-xl font-bold">{service.service_name}</h2>
//               <p className="text-gray-800 mt-2">{service.price} {service.pricing_criteria}</p>
//               <h6 className="text-xl font-medium">Hosted By <i>{service.hosts['host_name']}</i></h6>
//             </div>
//           </div>
//         ))}
//       </div>
//       {visibleServiceCount < data.length && (
//         <div className="flex justify-center items-center mt-6">
//           <button
//             onClick={showMoreServices}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//           >
//             More Services
//           </button>
//         </div>
//       )}

      // <footer className=" text-white mt-12 p-4">
      //   <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
 
      //     <div className="container mx-auto mt-4 md:mt-0 flex flex-col items md:flex-row md:space-x-6">
      //       <a href="/contact-us" className="text-gray-400 hover:text-white">
      //         Contact Us
      //       </a>
      //       <a href="/about-us" className="text-gray-400 hover:text-white">
      //         About Us
      //       </a>
      //       <a href="/policy" className="text-gray-400 hover:text-white">
      //         Help
      //       </a>
      //     </div>
      //     <div className="flex space-x-6">
      //       <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
      //         Facebook
      //       </a>
      //       <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
      //         Twitter
      //       </a>
      //       <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
      //         Instagram
      //       </a>
      //     </div>
      //   </div>
      //   <div className="mt-4 text-center text-gray-500 mb-0">
      //     <p>&copy; 2024 EcleStay. All rights reserved.</p>
      //   </div>
      // </footer>
//     </div>
//   );

//   return (
//     <>
//       <Online>{content}</Online>
//       <Offline>
//         <div className="flex justify-center items-center h-screen">
//           Network unavailable. Please check your internet connection.
//         </div>
//       </Offline>
//     </>
//   );
// };

// export default HomePage;

              {/* come here later */}
              {/* <p className="text-gray-600">{service.type}</p> */}
              // import React, { useState, useEffect } from 'react';
// import ServiceCard from './ServiceCard';
// import { Offline, Online } from 'react-detect-offline';
// import Loading from './Loading';
// import ServiceSearch from './ServiceSearch';

// function HomePage({ data }) {
//   const [servicesData, setServicesData] = useState([]);
//   const [visibleServiceCount, setVisibleServiceCount] = useState(8);
//   const [loading, setLoading] = useState(true);
//   const isLoading = Loading();
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setServicesData(data);
//       setLoading(false);
//     }, 1000);
//   }, [data]);

//   const showMoreServices = () => {
//     setVisibleServiceCount(prevCount => prevCount + 8);
//   };

//   const handleSearchResults = (results) => {
//     setSearchResults(results);
//     setVisibleServiceCount(8); // Reset the visible count
//   };

//   if (isLoading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   console.log('Rendering HomePage, data length:', data?.length);

//   const displayedServices = searchResults.length > 0 ? searchResults : servicesData;

//   return (
//     <div className="bg-gray-300 w-full h-screen flex flex-col overflow-hidden pt-28 md:pt-48">
//       <div className="flex-grow overflow-y-auto pt-4 px-4">
//         <div className='flex-grow'>
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-2xl font-bold">Services</h1>
//             <button
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               {isSearchOpen ? 'Close Search' : 'Search Services'}
//             </button>
//           </div>

//           {isSearchOpen && <ServiceSearch onSearchResults={handleSearchResults} />}

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {loading
//               ? Array(8).fill().map((_, index) => (
//                 <div key={index} className="border rounded-lg overflow-hidden shadow-lg animate-pulse">
//                   <div className="w-full h-56 bg-gray-200"></div>
//                   <div className="p-4">
//                     <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
//                     <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
//                     <div className="h-4 bg-gray-200 rounded w-2/3"></div>
//                   </div>
//                 </div>
//               ))
//               : displayedServices.slice(0, visibleServiceCount).map(service => (
//                 <ServiceCard key={service.service_id} service={service} />
//               ))
//             }
//           </div>

//           {!loading && visibleServiceCount < displayedServices.length && (
//             <div className="flex justify-center items-center mt-6">
//               <button
//                 onClick={showMoreServices}
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//               >
//                 More Services
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;

  


import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { Offline, Online } from 'react-detect-offline';
import Loading from './Loading';

function HomePage({ data }) {
  const [servicesData, setServicesData] = useState([]);
  const [visibleServiceCount, setVisibleServiceCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const isLoading = Loading();
  useEffect(() => {
    setTimeout(() => {
      setServicesData(data);
      setLoading(false);
    }, 1000); 
  }, [data]);

  const showMoreServices = () => {
    setVisibleServiceCount(prevCount => prevCount + 8);
  };


  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  console.log('Rendering HomePage, data length:', data);

  const content = (
    <div className="bg-gray-300 w-full h-screen flex flex-col overflow-hidden pt-28 md:pt-36">
      <div className="flex-grow  overflow-y-auto pt-4 px-4">
        <div className='flex-grow'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {loading
          ? Array(8).fill().map((_, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg animate-pulse">
              <div className="w-full h-56 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          ))
            : data?.slice(0, visibleServiceCount).map(service => (
            <ServiceCard key={service.service_id} service={service} />
          ))
        }
      </div>
      {!loading && visibleServiceCount < data && (
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

      <footer className=" text-white  p-4">
        <div className="mt-4 text-center text-gray-700 mb-3">
          <p>Eclectics &copy; 2024 EcleStay. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>  
  );
  return (
    <>
      <Online>{content}</Online>
      <Offline>
        <div className="flex justify-center items-center h-screen">
          Network unavailable. Please check your internet connection.
        </div>
      </Offline>
    </>
  )
}

export default HomePage;



