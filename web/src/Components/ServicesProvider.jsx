import React, { createContext, useEffect, useState } from 'react';

// Creating a context with a default value of an empty array.
export const ServicesContext = createContext([]);

const ServicesProvider = ({ children }) => {
  const [servicesData, setServicesData] = useState([]);
  const[foodData, setFoodData] = useState([]);
  const[accommodationsData,setAccommodationsData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch('api/show/services', {
        headers: {
          "ngrok-skip-browser-warning": '69420',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          
        },
      });

      const food = await fetch('api/show/accommodations?categoryName=Food', {
        headers: {
          "ngrok-skip-browser-warning": '69420',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          
        },
      });

      const accommodations = await fetch('api/show/accommodations?categoryName=Accomodations', {
        headers: {
          "ngrok-skip-browser-warning": '69420',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          
        },
      });


      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        const data2 = await food.json();
        const data3 = await accommodations.json();
        // const sleepData = await sleep.json();
        // const experienceData = await experience.json();
        // const eventsData = await response.json();
        setServicesData(data.data.Services);
        setFoodData(data2.data)
        setAccommodationsData(data3.data)
        // console.log(data2)

        // setServicesData(foodData.data.Food);
        // setServicesData(sleepData.data.Sleep);
        // setServicesData(experienceData.data.Experience);
        // setServicesData(eventsData.data.Services);
      } else {
        const responseText = await response.text();
        console.error('Response content type:', contentType);
        console.error('Response text:', responseText);
      }
    } catch (error) {
      // setError(error.message);
      setError('No Services found');
      console.error('No Services found:', error);
      // console.error('Error while getting services', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

   console.log(servicesData)
  console.log(foodData);
  console.log(accommodationsData);



  return (
    <ServicesContext.Provider value={{ servicesData, foodData, accommodationsData}}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
