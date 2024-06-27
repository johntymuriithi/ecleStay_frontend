
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FaCity,
  FaFire,
  FaUtensils,
  FaBed,
  FaHome,
  FaUmbrellaBeach,
  FaMountain,
  FaTree,
  FaWater,
  FaSnowflake,
  FaCar,
  FaUserTie,
} from 'react-icons/fa';



const Hero = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
     
    try {
      const response = await fetch('api/types',
      
        {
          headers: {
            "ngrok-skip-browser-warning": '69420',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
             'Authorization': `Bearer ${'token'}`,
      
          },
        }
      );
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        // console.log(data)
        setData(data);
      } else {
        const responseText = await response.text();
        console.error('Response content type:', contentType);
        console.error('Response text:', responseText);
        
      }
    } catch (error) {
      setError(error.message);
      // console.error('Error while getting products', error);
    }
  };

  useEffect(() => {
    getData()
  },[]);



  return (
<div className='text-white bg-cover bg-center w-full'>
  <div className="bg-white py-4">
    <div className="flex justify-start md:justify-between overflow-x-auto space-x-4 px-4"> {/* Updated to overflow-x-auto */}
      {data.map((type) => (
        <Link to="/service.type_name" key={type.type_id} className="flex flex-col items-center text-black text-sm ">
          <div className="flex items-center bg-gray-50 border border-black text-gray-700 rounded-full px-5 py-3 text-sm font-medium">
            icon {/* Replace with actual icon code */}
          </div>
          <span className="mt-2">{type.type_name}</span> {/* Add margin between icon and text */}
        </Link>
      ))}
    </div>
  </div>
</div>




    // <div className='text-white flex flex-col bg-cover bg-center w-full' >


    //   <div className="bg-white py-4">
    //     <div className="flex flex-row items-center mx-auto space-x-4 px-4  touch-pan-x">
    //       {data.map((type) => {
    //          return <Link to="/cities" key={type.type_id} className="flex flex-col items-center text-black text-sm">
    //          <FaCity size={20} />
    //          <span>{type.type_name}</span>
    //        </Link>
    //       })}

    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero;

          {/* <Link to="/cities" className="flex flex-col items-center text-black text-sm">
            <FaCity size={20} />
            <span>Cities</span>
          </Link>
          <Link to="/trending" className="flex flex-col items-center text-black text-sm">
            <FaFire size={20} />
            <span>Trending</span>
          </Link>
          <Link to="/food" className="flex flex-col items-center text-black text-sm">
            <FaUtensils size={20} />
            <span>Food</span>
          </Link>
          <Link to="/rooms" className="flex flex-col items-center text-black text-sm">
            <FaBed size={20} />
            <span>Rooms</span>
          </Link>
          <Link to="/villa" className="flex flex-col items-center text-black text-sm">
            <FaHome size={20} />
            <span>Villa</span>
          </Link>
          <Link to="/beach" className="flex flex-col items-center text-black text-sm">
            <FaUmbrellaBeach size={20} />
            <span>Beach</span>
          </Link>
          <Link to="/mountains" className="flex flex-col items-center text-black text-sm">
            <FaMountain size={20} />
            <span>  Mountains</span>
          </Link>
          <Link to="/island" className="flex flex-col items-center text-black text-sm">
            <FaTree size={20} />
            <span>Island</span>
          </Link>
          <Link to="/nature" className="flex flex-col items-center text-black text-sm">
            <FaTree size={20} />
            <span>Nature</span>
          </Link>
          <Link to="/lake" className="flex flex-col items-center text-black text-sm">
            <FaWater size={20} />
            <span>Lake</span>
          </Link>
          <Link to="/cabin" className="flex flex-col items-center text-black text-sm">
            <FaSnowflake size={20} />
            <span>Cabin</span>
          </Link>
          <Link to="/driver" className="flex flex-col items-center text-black text-sm">
            <FaCar size={20} />
            <span>Driver</span>
          </Link>
          <Link to="/tour-guide" className="flex flex-col items-center text-black text-sm">
            <FaUserTie size={20} />
            <span>Tour Guide</span>
          </Link> */}













 


// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import axios from 'axios';
// import {
//   FaCity,
//   FaFire,
//   FaUtensils,
//   FaBed,
//   FaHome,
//   FaUmbrellaBeach,
//   FaMountain,
//   FaTree,
//   FaWater,
//   FaSnowflake,
//   FaCar,
//   FaUserTie,
// } from 'react-icons/fa';

// const imageURL = "https://img.freepik.com/free-photo/attractive-stylish-young-woman-khaki-dress-desert-traveling-africa-safari-wearing-hat-backpack-taking-photo-vintage-camera_285396-9161.jpg?t=st=1717150853~exp=1717154453~hmac=0c40db51cbe6f2691413ba14b8833d653525d5afce8bdbb9beb332223956a295&w=900";

// const Hero = () => {
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data using Axios when the component mounts
//     axios.get('https://api.example.com/data') // Replace with your API endpoint
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className='text-white bg-gray-300 h-screen flex flex-col bg-cover w-full bg-center' style={{ backgroundImage: `url(${imageURL})` }}>
//       <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 p-6">
//         <p className='font-bold text-3xl text-[#ff0099] mb-4'>Welcome to EcleStay</p>
//         <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold mb-4'>
//           Experience, Comfort and Embrace Culture
//         </h1>
//         <p className='md:text-5xl sm:text-3xl text-xl font-bold mb-8'>
//           Your gateway to comfort and culture. Immerse yourself in a world 
//           where each stay is a journey and every destination feels like home.
//         </p>
//         <div className='flex flex-col items-center space-y-4 mb-8'>
//           <div className='flex items-center space-x-4'>
//             <label>Check-In:</label>
//             <DatePicker selected={checkInDate} onChange={(date) => setCheckInDate(date)} className='text-black' />
//           </div>
//           <div className='flex items-center space-x-4'>
//             <label>Check-Out:</label>
//             <DatePicker selected={checkOutDate} onChange={(date) => setCheckOutDate(date)} className='text-black' />
//           </div>
//         </div>
//         <div className="flex overflow-x-scroll space-x-8 p-4">
//           {data.map(item => (
//             <a key={item.id} href={item.link} className="flex flex-col items-center">
//               {getIconComponent(item.icon)}
//               <span>{item.name}</span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Function to return the appropriate icon component based on the icon name
// const getIconComponent = (iconName) => {
//   const icons = {
//     FaCity: <FaCity size={24} />,
//     FaFire: <FaFire size={24} />,
//     FaUtensils: <FaUtensils size={24} />,
//     FaBed: <FaBed size={24} />,
//     FaHome: <FaHome size={24} />,
//     FaUmbrellaBeach: <FaUmbrellaBeach size={24} />,
//     FaMountain: <FaMountain size={24} />,
//     FaTree: <FaTree size={24} />,
//     FaWater: <FaWater size={24} />,
//     FaSnowflake: <FaSnowflake size={24} />,
//     FaCar: <FaCar size={24} />,
//     FaUserTie: <FaUserTie size={24} />,
//   };
//   return icons[iconName] || <FaCity size={24} />; // Default to FaCity if icon name not found
// };

// export default Hero;


