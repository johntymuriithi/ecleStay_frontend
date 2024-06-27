import React, { createContext, useEffect, useState } from 'react';

// Creating a context with a default value of an empty array.
export const ServicesContext = createContext([]);

const ServicesProvider = ({ children }) => {
  const [servicesData, setServicesData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch('api/show/services', {
        headers: {
          "ngrok-skip-browser-warning": '69420',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${'token'}`,
        },
      });

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setServicesData(data.data.Services);
      } else {
        const responseText = await response.text();
        console.error('Response content type:', contentType);
        console.error('Response text:', responseText);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error while getting services', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(servicesData)



  return (
    <ServicesContext.Provider value={{ servicesData}}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
