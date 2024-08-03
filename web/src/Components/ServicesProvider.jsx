import React, { createContext, useEffect, useState } from 'react';
export const ServicesContext = createContext([]);

const ServicesProvider = ({ children }) => {
  const [servicesData, setServicesData] = useState([]);
  const[foodData, setFoodData] = useState([]);
  const[accommodationsData,setAccommodationsData] = useState([]);
  const[experienceData,setExperienceData] = useState([]);
  const[eventData,setEventData] = useState([]);
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
      console.log(food)

      const accommodations = await fetch('api/show/accommodations?categoryName=Accomodations', {
        headers: {
          "ngrok-skip-browser-warning": '69420',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          
        },
      });
      console.log(accommodations)

      const experience = await fetch('api/show/accommodations?categoryName=Experiences', {
        headers: {
          "ngrok-skip-browser-warning": '69420',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          
        },
      });
      console.log(experience)


      const event = await fetch('api/show/accommodations?categoryName=Events', {
        headers: {
          "ngrok-skip-browser-warning": '69420',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          
        },
      });
      console.log(event)
       
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        const data1 = await food.json();
        const data2 = await accommodations.json();
        const data3 = await experience.json();
        const data4 = await event.json();
        console.log(data1)
        setServicesData(data.data.Services);
        setFoodData(data1.data);
        console.log(foodData)
        setAccommodationsData(data2.data)
        setExperienceData(data3.data)
        setEventData(data4.data)
 
      } else {
        const responseText = await response.text();
        console.error('Response content type:', contentType);
        console.error('Response text:', responseText);
      }
    } catch (error) {
      setError('No Services found');
      console.error('No Services found:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

   console.log(servicesData)
  console.log(foodData);
  console.log(accommodationsData);
  console.log(experienceData);
  console.log(eventData);

  return (
    <ServicesContext.Provider value={{ servicesData, foodData, accommodationsData,experienceData,eventData}}>
      {children}
    </ServicesContext.Provider>
  );
};
export default ServicesProvider;