//     import React, { useContext, useState,useEffect  } from 'react';
//     import { Link, useParams } from 'react-router-dom';
//     import Contact from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Contact.png';
//     import { ServicesContext } from '../ServicesProvider';
//     import Review from '../Review';

//     const HomeDetail = () => {
      
//       const services = useContext(ServicesContext);
//       const servicesData = services.servicesData;
//       const { id } = useParams();

//       // const reviews = [
//       //   { reviewerName: 'John Doe', reviewText: 'Great experience!', rating: 5 },
//       //   { reviewerName: 'Jane Smith', reviewText: 'Could improve cleanliness.', rating: 3 },
        
//       // ];


//       const service = servicesData.find(service => service.service_id === parseInt(id, 10));
//       const [reviews, setReviews] = useState([]);
//       const [error, setError] = useState(null);

//       useEffect(()=>{
//         const fetchData= async () => {
//             try{
//                 const response=await fetch('api/show/host/reviews?id=57', {
//                     headers: {
//                         "ngrok-skip-browser-warning": '69420',
//                         'Content-Type': 'application/json',
//                         'Access-Control-Allow-Origin': '*',
                         
                  
//                       },
//                     });
//                     if (!response.ok) {
//                       throw new Error('Failed to fetch reviews');
//                     }
//                     const data = await response.json();
//                       setReviews(data);
//                     } catch (error) {
//                       setError(error.message);
//                       console.error('Error fetching reviews:', error);
//                     }
//                   };
              
              
//                   fetchData();
//                 }, [id]);
//                 console.log(reviews);
  
//       if (!service) {
//         return <p>Service not found</p>;
//       }
    
//       return (
//         <div className="text-center bg-white w-full h-full flex flex-col pt-16 md:pt-36">
//           <h1 className='text-3xl font-bold ml-10 mt-11 mb-4'>Your Comfort is our concern</h1>
//           <div className='flex flex-wrap md:ml-10 ml-0'>
          
//           <div className='w-full md:w-1/2 mb-4 md:mb-0'>
//           <img src={service.images[0].service_image} alt={service.service_name} className="mx-auto  lg:ml-20 w-[70%] lg:[800px] rounded" />
//           <div className="mt-4 mb-4 mx-auto lg:ml-20">
//             <p className="font-bold">{service.service_name}</p>
//             <p className="text-lg">Location: {service.county?.county_name}</p>
//           </div>
       
//           <div className="mb-4 mx-auto lg:ml-20">
//           <p className="text-lg">Price: ${service.price} {service.pricing_criteria}</p>
//           <h2 className="text-xl font-normal">{service.start_date}</h2>
//           </div>

//           </div>

//           <div className="w-full md:w-1/2 md:pl-3 grid grid-cols-2 gap-4">
//           <div className="flex flex-col justify-between">
//              <img src={service.images[0].service_image} alt={service.service_name} className="w-full h-auto rounded mb-4" />
//              <img src={service.images[1].service_image} alt={service.service_name} className="w-full h-auto rounded" />
//           </div>
//           <div className="flex flex-col justify-between">
//             <img src={service.images[2].service_image} alt={service.service_name} className="w-full h-auto rounded mb-4" />
//             <img src={service.images[0].service_image} alt={service.service_name} className="w-full h-auto rounded" />
//           </div>
//         </div>
//         </div>
//         {/* Host information */}

//         <div className="flex items-center mt-4 bg-white p-4">
//         <div className="w-3/4 pl-4">
//         <img src={Contact} alt="Host Profile" />
//         <h6>Hosted By: <i>{service.hosts['host_name']}</i></h6>
//         <h6>Host id: <i>{service.hosts['host_id']}</i></h6>
//         <h6>Language: <i>{service.hosts['language']}</i></h6>
//           <p className="font-bold">Phone: 07xxxxxxxx</p>
//           <p className="font-bold">Email: host@gmail.com</p>
//           <p className="font-bold">Postal Address:</p>
//           <p>Description of the host goes here...</p>
//         </div>
//       </div>

//       <div className="container mx-auto p-4">
//   <h1 className="text-2xl font-bold mb-4">Host Reviews</h1>
//   <div id="reviewsContainer">
//     {reviews.map((review, index) => (
//       <Review
//         key={index}
//         reviewerName={review.reviewerName}
//         reviewText={review.reviewText}
//         rating={review.rating}
//         date={review.date} // Adjust if date is part of your review data
//       />
//     ))}
//   </div>
// </div>

//              <div className="relative">
//              <h2 className="text-xl font-bold mt-4">Description</h2>
//                <div className="md:absolute left-6">
//                  <p className="text-lg">{service.description}</p>
//                 </div>
//               </div> 

//             <div className='relative mt-10'>
//               <div className='md:absolute left-6'>
//                 <h2 className="text-xl font-bold">Amenities</h2>
//                   <ul className="list-disc list-inside">
//                     {service.amenities.map(amenity => (
//                       <li key={amenity.amenity_id}>{amenity.amenity_name}</li>
//                     ))}
//                      <h2 className="text-xl ">Bedroom: {service.bedroom}</h2> 
//                      <h2 className="text-xl ">Bath: {service.bath}</h2> 
//                      <h2 className="text-xl ">Beds: {service.beds}</h2>
//                      <p className="text-xl">Cancellation Policy: {service.cancellation_policy}</p>
//                   </ul>
//                </div>
//               </div>
        
 
   
//         <h6 className="text-xl font-medium mt-4">Hosted By <i>{service.hosts['host_name']}</i></h6>
//         <h2 className="text-xl font-bold mt-4">Roles</h2>
//          <ul className="list-disc list-inside">
//           {service.roles.map(role => (
//             <li key={role.role_id}>{role.role_name}</li>
//           ))}
//         </ul> 

//         <div className="w-full flex items-center justify-center mt-24">
//           <Link to={`/booking/${service.service_id}`} className="bg-blue-500 w-72 text-white rounded-full hover:bg-blue-700 flex items-center justify-center py-2">
//             RESERVE
//           </Link>
//         </div>
//         </div>
//       );
//     };
    
//     export default HomeDetail;


import React, { useContext, useState,useEffect  } from 'react';
import { Link, useParams } from 'react-router-dom';
import user from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/user.png';
import location from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/location.gif';
import { ServicesContext } from '../ServicesProvider';
import Review from '../Review';

const HomeDetail = () => {
  
  const services = useContext(ServicesContext);
  const servicesData = services.servicesData;
  const { id } = useParams();

  const service = servicesData.find(service => service.service_id === parseInt(id, 10));
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchData= async () => {
        try{
            const response=await fetch('api/show/host/reviews?id=57', {
                headers: {
                    "ngrok-skip-browser-warning": '69420',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                     
              
                  },
                });
                if (!response.ok) {
                  throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                  setReviews(data);
                } catch (error) {
                  setError(error.message);
                  console.error('Error fetching reviews:', error);
                }
              };
          
          
              fetchData();
            }, [id]);
            console.log(reviews);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
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
      <div className="mt-4 mb-4 mx-auto lg:ml-20">
        <p className="font-bold text-lg">{service.service_name} </p>
           {/* <p className="text-lg"><Link to={`/map?location=${encodeURIComponent(service.county?.county_name)}`} className="flex items-center ">
          <img src={location} alt='location' className='w-6 h-6 mr-2 text-blue-500' />
          {service.county?.county_name}
        </Link></p> */}
          <p className="text-lg">Location: <Link to={`/map?location=${encodeURIComponent(service.county?.county_name)}`} className="text-blue-500">
          <i className="fa fa-map-marker mr-2" aria-hidden="true"></i> {service.county?.county_name}
        </Link></p>
         
        <p className="text-lg">Price: ${service.price} {service.pricing_criteria}</p>
        <p className="text-xl font-normal">{service.start_date}</p>
      </div>

      <div className="right-0">
  <h1 className="text-2xl font-bold mb-4">Host Reviews</h1>
  <div id="reviewsContainer">
    {reviews.map((review, index) => (
      <Review
        key={index}
        reviewerName={review.reviewerName}
        reviewText={review.reviewText}
        rating={review.rating}
        date={review.date} // Adjust if date is part of your review data
      />
    ))}
  </div>
</div>


      {/* Host Information */}
    <div className='flex items-center mt-4 mb-4 mx-auto lg:ml-40 pt-16'>
  <img src={user} alt="Host Profile" className='h-14 w-14 mr-4'/>
  <div>
    <h6>Hosted By: <i>{service.hosts['host_name']}</i></h6>
    <h6>Language: <i>{service.hosts['language']}</i></h6>
    <h6>Cancellation Policy: {service.cancellation_policy}</h6>
  </div>
</div> 
{/* Description */}
<div className=" lg:ml-40 ml-0 pt-16">
           <div className="md:absolute left-6">
             <p className="text-lg">{service.service_name}is a Villa located in{service.county?.county_name}.</p>
              <p className='text-lg'>It is {service.description} as many people term it.</p>
              <p>It has various amenities such as: </p>
              <ul className="list-disc list-inside">
                {service.amenities.map(amenity => (
                  <li key={amenity.amenity_id}>{amenity.amenity_name}</li>
                ))}
                 <p className="text-xl ">Bedroom: {service.bedroom}</p> 
                 <p className="text-xl ">Bath: {service.bath}</p> 
                 <p className="text-xl ">Beds: {service.beds}</p>
       
              </ul>
             
            </div>
          </div> 


    <div className=' pt-16 md:pt-60 lg:ml-20'>
    <p className="text-xl font-bold ">Roles</p>
    <p>The following rules and regulations needs to be followed by the guests</p>
     <ul className="list-disc list-inside">
      {service.roles.map(role => (
        <li key={role.role_id}>{role.role_name}</li>
      ))}
    </ul> 
    </div>

    <div className="w-full flex items-center justify-center mt-24 pt-3 md:pt-16">
      <Link to={`/booking/${service.service_id}`} className="bg-blue-500 w-72 text-white rounded-full hover:bg-blue-700 flex items-center justify-center py-2">
        RESERVE
      </Link>
    </div>
    </div>
  );
};

export default HomeDetail;