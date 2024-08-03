import React, { useContext } from 'react';
import { ServicesContext } from '../ServicesProvider';
import HomePage from './HomePage';
     
const Events = () => {
  const services = useContext(ServicesContext);
  const eventData = services.eventData;

  return (
    <div className='text-black bg-red-800'>
      <HomePage data={eventData} />
      
    </div>
  )
}


export default Events;