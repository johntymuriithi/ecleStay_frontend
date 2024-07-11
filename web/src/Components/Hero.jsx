
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
<div className='fixed bg-white z-500 top-20 md:top-36 text-white bg-cover bg-center w-full  '>
  <div className=" py-4">
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


  );
}

export default Hero;
