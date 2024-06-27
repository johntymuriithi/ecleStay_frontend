
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Room10 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room10.jpg';
import Room9 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room9.jpg';
import Room8 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room8.jpg';
import Room7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room7.jpg';
import Room6 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room6.jpg';
import Contact from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Contact.png';

const RoomDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const roomData = location.state?.roomData;

  useEffect(() => {
    if (!roomData) {
      navigate('/rooms');
    }
  }, [roomData, navigate]);

  // If roomData is null, render a loading message or nothing
  if (!roomData) {
    return null; // You can render a loading spinner or message here
  }

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <h1 className="text-3xl font-bold ml-10 mt-11 mb-4">Your Comfort is Our Concern</h1>
      <div className="flex flex-wrap md:ml-10 ml-0">
        {/* Room Details */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img className="mx-auto lg:ml-20 w-[70%] h-auto rounded" src={roomData.imageUrl} alt={roomData.name} />
          <div className="mt-4 mb-4 mx-auto lg:ml-20">
            <p className="font-bold">Nyeri, Kenya</p>
          </div>
          <div className="mb-4 mx-auto lg:ml-20">
            <p className="font-bold">Bed: Double-Bed</p>
            <p>{roomData.bed}</p>
          </div>
          <div className="mb-4 mx-auto lg:ml-20">
            <p className="font-bold">Bathroom: Private</p>
            <p>{roomData.bathroom}</p>
          </div>
          <div className="mb-4 mx-auto lg:ml-20">
            <p className="font-bold">Reviews:</p>
            <div className="flex items-center">
              <p className="mr-2">4.5 Stars</p>
              <div className="flex">
                {[...Array(5)].map((star, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 0c.28 0 .52.11.71.29l1.82 1.82 4.79.7a.944.944 0 0 1 1.11 1.11l-.7 4.79 1.82 1.82a.996.996 0 0 1 0 1.41l-3.59 3.59 1.5 4.63c.12.37-.08.77-.45.89l-4.3 1.92a.944.944 0 0 1-1.17-1.18l1.92-4.3-3.63-3.63a.996.996 0 0 1-.29-.7l-.7-4.79L.3 8.92A.996.996 0 0 1 .29 7.5l1.82-1.82.7-4.79A.996.996 0 0 1 4.8.29L8.92 2.3 9.74.48A.996.996 0 0 1 10 0z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="w-full md:w-1/2 md:pl-3 grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between">
            <img className="w-full h-auto rounded mb-4" src={Room9} alt="Room 9" />
            <img className="w-full h-auto rounded" src={Room7} alt="Room 7" />
          </div>
          <div className="flex flex-col justify-between">
            <img className="w-full h-auto rounded mb-4" src={Room8} alt="Room 8" />
            <img className="w-full h-auto rounded" src={Room6} alt="Room 6" />
          </div>
        </div>
      </div>

      {/* Host Information */}
      <div className="flex items-center mt-4 bg-white p-4">
        <div className="w-1/4 flex justify-center">
          <img className="w-20 h-20 rounded-full" src={Contact} alt="Host Profile" />
        </div>
        <div className="w-3/4 pl-4">
          <p className="font-bold">Host Name</p>
          <p className="font-bold">Phone: 07xxxxxxxx</p>
          <p className="font-bold">Email: host@gmail.com</p>
          <p className="font-bold">Postal Address:</p>
          <p>Description of the host goes here...</p>
        </div>
      </div>

      {/* Hotel Description */}
      <div className="bg-white p-4">
        <p className="font-bold mb-2">Hotel Description:</p>
        <p>Free cancellation after payment</p>
        <p>Hotel in a rental area</p>
        <p>Shared common places</p>
        <p>Meals available at any area within the rental</p>
        <p>Meal payment done after Service</p>
        <p>Relaxation area available</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisi et arcu tincidunt tincidunt vel a sem. In hac habitasse platea dictumst. Integer nec odio. Praesent libero.
        </p>
        <div className="w-1/2 flex justify-center mt-6">
          <Link to="/login" className="bg-blue-500 w-1/2 text-white rounded hover:bg-blue-700 flex items-center justify-center py-2">
            RESERVE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
