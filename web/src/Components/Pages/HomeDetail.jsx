
import React, { useContext, useState,useEffect  } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ServicesContext } from '../ServicesProvider';
import Loading from './Loading';
import Server from './Server';
import { Offline, Online } from 'react-detect-offline';
import HostReview from './HostReview';
import location from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/location.gif';

const StarRating = ({ rating }) => {
  return (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
      key={star}
      className={`w-5 h-5 ${
        star <= rating ? 'text-yellow-400' : 'text-gray-300'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      </div>
      );
    };
    const HomeDetail = () => {

      const services = useContext(ServicesContext);
      const servicesData = services.servicesData;
      const { id } = useParams();
      const [service, setService] = useState(null);
      const [reviews, setReviews] = useState([]);
      const isLoading = Loading();
      const [error, setError] = useState(null);
      const serverStatus = Server('api');
      const [showPopup, setShowPopup] = useState(false);
      const [checker, setChecker] = useState(false)
      console.log(id)
      // let servicesData=[]

      // if (!types) { servicesData = types} else { servicesData = services.serviceData}
      const togglePopup = () => {
        setShowPopup(!showPopup);
      };

      useEffect(() => {
        
        const foundService = servicesData.find(service => service.service_id === parseInt(id, 10));
        console.log(foundService)
        setService(foundService)
        const check = foundService.hosts.hostReviews;
        if (Object.keys(check).length) {
          setReviews(foundService.hosts.hostReviews.reviews)
        } else {
          setChecker(true);
          setReviews(foundService.hosts.hostReviews)
        }
      }, [servicesData, id]);

      console.log(reviews)


      const handleReviewSubmit = (newReview) => {
        setReviews([...reviews, newReview]); 
      };
      
      if (!service) {
        return <p>Service not found</p>;
      }
      
      const fields = [
        { name: 'Rating', value: service.serviceReviews['averageRating'] },
        { name: 'Cleanliness', value: service.serviceReviews['averageCleanliness'] },
        { name: 'Location', value: service.serviceReviews['averageLocation'] },
        { name: 'Communication', value: service.serviceReviews['averageCommunication'] },
        { name: 'Reviews', value: service.totalReviews , isCount: true },];

        console.log(reviews)
        const reviewsData = reviews.map(review => ({
          review_id: review.review_id,
          userPic: review.userPic,
          userName: review.userName,
          content: review.content
        }));
        console.log(reviewsData)

        const serviceReviews = service.serviceReviews.reviews;
        const handleRating = (rating) => {
          let total = "";
          for (let i = 0; i < rating; i++) {
            total += '⭐';
          }
          return total
        }

  

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!serverStatus === 'unavailable') {
    return (
      <div className="flex justify-center items-center h-screen">
        Server is currently unavailable. Please try again later.
      </div>
    );
  }

  const content = (
    <div className="text-center bg-white w-full h-full flex flex-col pt-16 md:pt-36">
        <h1 className='text-3xl font-bold ml-10 mt-11 mb-4'>Your Comfort is our concern</h1>
    <div className="flex flex-wrap mx-20">
        <div className='w-full md:w-1/2 '>
         <img src={service.images[0].service_image} alt={service.service_name} className="w-full h-auto rounded mb-4 md:mb-0" />
        </div>

      <div className="w-full md:w-1/2 md:pl-3 grid grid-cols-2 gap-2">
      <div className="flex flex-col justify-between">
         <img src={service.images[0].service_image} alt={service.service_name} className="w-full h-1/2 rounded mb-2" />
         <img src={service.images[1].service_image} alt={service.service_name} className="w-full h-1/2 rounded" />
      </div>
      <div className="flex flex-col justify-between">
        <img src={service.images[2].service_image} alt={service.service_name} className="w-full h-1/2 rounded mb-2" />
        <img src={service.images[0].service_image} alt={service.service_name} className="w-full h-1/2 rounded" />
      </div>
    </div>
    </div>
    
   {/* Service details */}
   <div className='container mx-auto px-4'>
    <div className='flex flex-col lg:flex-row justify-between items-start pt-16'>
      <div className="mt-4 mb-4 mx-auto lg:ml-20">
        <p className="font-bold text-lg">{service.service_name} </p>
        <div className="flex items-center space-x-4">
           <p className="text-xl flex items-center">
           <span className="mr-2">•</span> Bedroom: {service.bedroom}
          </p>
          <p className="text-xl flex items-center">
           <span className="mr-2">•</span> Bath: {service.bath}
          </p>
          <p className="text-xl flex items-center">
          <span className="mr-2">•</span> Beds: {service.beds}
         </p>
       </div>

            <p className="text-lg">
                <Link to={`/map?location=${encodeURIComponent(service.county?.county_name)}`} className="flex items-center">
                <img src={location} alt='location' className='w-6 h-6 mr-2 text-blue-500' /> 
                {service.county?.county_name}
                </Link>
            </p>
        <p className="text-lg">Price: ${service.price} {service.pricing_criteria}</p>
        <p className="text-xl font-normal">{service.start_date}</p>
      </div>

      <div className="w-full lg:w-2/4 mb-8 lg:mb-0 lg:px-4">
  <p className="text-lg">{service.service_name} is a Villa located in {service.county?.county_name}.</p>
  <p className='text-lg'>It is {service.description} as many people term it.</p>

</div>
</div>
</div>

<div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row justify-between items-start pt-16">
    {/* Host Information */}
        <div className="w-64 bg-gray-100 rounded-lg shadow-md p-4" onClick={togglePopup}>
      <div className="flex">
        <div className="flex flex-col items-start">
          <img 
            src={service.hosts['picture']} 
            alt="Host Profile" 
            className="w-16 h-16 rounded-full mb-2"
          />
          <h3 className='text-lg font-bold'>{service.hosts['host_name']}</h3>
        </div>
        <div className="flex flex-col items-end ml-auto">
          <p className="text-xl font-medium ">{checker ? reviews.length : service.hosts.hostReviews.reviews.length}</p>
          <p className='text-sm text-gray-600 font-normal border-b border-gray-600 mb-4'>Reviews</p>
          <p className="text-xl font-medium">{checker ? reviews.length : service.hosts.hostReviews.averageRating}</p>
          <p className='text-sm text-gray-600 font-normal border-b border-gray-600 mb-4'>Rating</p>
          <p className="text-sm text-gray-600 font-normal border-b border-gray-600 mb-4 ">{checker ? reviews.length : service.hosts.created_at}</p>
        </div>
      </div>
      {showPopup && (
        <HostReview reviews={reviewsData} togglePopup={togglePopup} />
      )}
    </div>    
      
    {/* Description */}


<ul className="flex flex-col list-none p-0 space-y-2">
  {service.amenities.map(amenity => (
    <li key={amenity.amenity_id}>{amenity.amenity_name}</li>
  ))}
</ul>




    {/* Roles */}
    <div className='w-full lg:w-1/4 '>
      <p className="text-xl font-bold mb-2">Roles</p>
      <p className="mb-2">The following rules and regulations need to be followed by the guests:</p>
      <ul className="list-disc list-inside">
  {service.roles.map(role => (
    <li key={role.role_id}>{role.role_name}</li>
  ))}
</ul>

    </div>
  </div>
</div>
{/* fields */}
<div className="overflow-x-auto pt-16">
      <div className="flex space-x-4 justify-between p-4 min-w-max">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col items-center min-w-[120px]">
            <h3 className="font-bold mb-2 text-lg text-gray-700">{field.name}</h3>
            {field.isCount ? (
              <p className="text-2xl font-semibold text-blue-600">{field.value}</p>
            ) : (
              <div className="flex flex-col items-center">
                <StarRating rating={field.value} />
                <p className="mt-1 text-sm text-gray-600">{field.value}/5</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className='md:ml-20 ml-10 pt-16 '>
  {serviceReviews ? serviceReviews.map((review) => {
    return (
      <div key={review.id || review.review_id} className='w-5/12 rounded-xl'> {/* Add key here */}
        <div className='flex items-center gap-6'>
          <div>
            <img alt='here' src={review.userPic}
            className='w-12 h-12 rounded-full mr-4' /> 
          </div>
          <div className='text-justify'>
            <h1>{review.userName}</h1>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className='flex gap-3 items-center mt-2 mb-1'>
          {handleRating(review.rating)}
          <p>{review.review_date}</p>
          <p>{review.daysStayed}</p>
        </div>
    
        <div className='text-justify'>
          {review.content}
        </div>
      </div>
    );
  }) : <h1>No services Reviews Yet</h1>}
</div>

    <div className="w-full flex items-center justify-center mt-24 pt-3 md:pt-16">
      <Link to={`/booking/${service.service_id}`} className="bg-blue-500 w-72 text-white rounded-full hover:bg-blue-700 flex items-center justify-center py-2">
        RESERVE
      </Link>
    </div>
    </div>
    
  );

  return (
    <>
      <Online>{content}</Online>
      <Offline>
        <div className="flex justify-center items-center h-screen">
          Network unavailable. Please check your internet connection.
        </div>
      </Offline>
    </>
  );
};

export default HomeDetail;