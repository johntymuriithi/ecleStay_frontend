
import React from 'react'

const Hero = () => {
  console.log("here")
  return (
    <div>Hero</div>
  )
}

export default Hero
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import 'react-datepicker/dist/react-datepicker.css';

// const Hero = () => {
//   const [data, setData] = useState([]);
//   const [type, setType] = useState([]);
//   const getData = async () => {
//     try {
//       const response = await fetch('api/types',
//         {
//           headers: {
//             "ngrok-skip-browser-warning": '69420',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Authorization': `Bearer ${'token'}`,
//           },
//         }
//       );

//       const contentType = response.headers.get('content-type');
//       if (contentType && contentType.includes('application/json')) {
//         const data = await response.json();
//         console.log(data)
//         setData(data);
//       } else {
//         const responseText = await response.text();
//         console.error('Response content type:', contentType);
//         console.error('Response text:', responseText);
//       }
//     } catch (error) {
//       setError(error.message);
//       console.error('Error while getting products', error);
//     }
//   };


//   useEffect(() => {
//     getData()
//   },[]);
  
//   return (

//   <div className='fixed bg-white z-500 top-20 md:top-36 text-white bg-cover bg-center w-full'>
//   <div className="py-2">     
//     <div className="flex justify-start md:justify-between overflow-x-auto space-x-2 px-2"> 
//       {data.map((type) => (
//         <Link to="/service.type_name" key={type.type_id} className="flex flex-col items-center text-black text-xs">
//           <div className="flex items-center bg-gray-50 border border-black text-gray-700 rounded-full px-3 py-2 text-xs font-medium"> 
//           {type.type_name}
//           </div>
//         </Link>
        
//       ))}
//     </div>      
//   </div>
// </div>
// );
// }

// export default Hero;


  // const getType = async (type) => {
  //   try {
  //     const response = await fetch(`api/searchBy/service?type=${type}`,
  //       {
  //         headers: {
  //           "ngrok-skip-browser-warning": '69420',
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Origin': '*',
  //           'Authorization': `Bearer ${'token'}`,
  //         },
  //       }
  //     );
      
  //     const contentType = response.headers.get('content-type');
  //     if (contentType && contentType.includes('application/json')) {
  //       const data = await response.json();
  //       console.log(data)
  //       setType(data);
  //     } else {
  //       const responseText = await response.text();
  //       console.error('Response content type:', contentType);
  //       console.error('Response text:', responseText);
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //     console.error('Error while getting products', error);
  //   }
  // };


  // <div className='fixed bg-white z-500 top-20 md:top-36 text-white bg-cover bg-center w-full  '>
  //   <div className=" py-4">
      
  //     <div className="flex flex-col items-end p-4 space-y-4">
  //       <Link to="/host-registration">
  //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  //           Become a Host
  //         </button>
  //       </Link>
  //       <Link to="/tour-guide-registration">
  //         <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
  //           Become a Tour Guide
  //         </button>
  //       </Link>
  //     </div>
          
  //         <div className="flex justify-start md:justify-between overflow-x-auto space-x-4 px-4"> {/* Updated to overflow-x-auto */}
  //           {data.map((type) => (
  //             <Link to="/service.type_name" key={type.type_id} className="flex flex-col items-center text-black text-sm ">
  //               <div className="flex items-center bg-gray-50 border border-black text-gray-700 rounded-full px-5 py-3 text-sm font-medium">
  //                 Food 
  //                 </div>
  //                 <span className="mt-2">{type.type_name}</span> 
  //                 </Link>
  //               ))}
  //               </div>
                
  //               </div>
  //               </div>
  //               );
  //             }
