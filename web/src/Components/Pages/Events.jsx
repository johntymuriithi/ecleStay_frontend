import React, { useContext } from 'react';
import { ServicesContext } from '../ServicesProvider';
import HomePage from './HomePage';
     
const Events = () => {
  const services = useContext(ServicesContext);
  const foodData = services.foodData;

  return (
    <div className='text-black bg-red-800'>
      <HomePage data={foodData} />
      
    </div>
  )
}


export default Events;