import React, { useContext } from 'react';
import { ServicesContext } from '../ServicesProvider';
import { Link } from 'react-router-dom';
import Contact from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Contact.png';
import HomePage from './HomePage';
     
const Experience = () => {
  const services = useContext(ServicesContext);
  const experienceData = services.experienceData;

  return (
    <div className='text-black bg-red-800'>
      <HomePage data={experienceData} />
      
    </div>
  )
}


export default Experience;