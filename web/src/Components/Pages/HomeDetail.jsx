
    // import React, { useContext, useState } from 'react';
    // import { Link, useParams } from 'react-router-dom';
    
    // import { ServicesContext } from '../ServicesProvider';
    // import Food0 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food0.jpg';
    // import Food7 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food7.jpg';
    // import Food5 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food5.jpg';
    // import Food4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Food4.jpg';
    
    // const images = [
    //   { src: Food0, alt: 'Food0' },
    //   { src: Food7, alt: 'Food7' },
    //   { src: Food5, alt: 'Food5' },
    //   { src: Food4, alt: 'Food4' },
    // ];
    
    // const HomeDetail = () => {
      
    //   const services = useContext(ServicesContext);
    //   const servicesData = services.servicesData;
    //   const { id } = useParams();
    //   const service = servicesData.find(service => service.service_id === parseInt(id, 10));
    
    //   const [expandedImgSrc, setExpandedImgSrc] = useState('');
    //   const [imgText, setImgText] = useState('');
    
    //   const handleImageClick = (img) => {
    //     setExpandedImgSrc(img.src);
    //     setImgText(img.alt);
    //   };
    
    //   if (!service) {
    //     return <p>Service not found</p>;
    //   }
    
    //   return (
    //     <div className="text-center bg-white w-full min-h-screen   ">
    //       <h1 className="text-2xl font-bold my-4">Eat and Eat</h1>
    //       <h2 className="text-xl font-bold">{service.service_name}</h2> 
          
    //        <div className="flex flex-wrap justify-center">
    //         {images.map((img, index) => (
    //           <div key={index} className="w-1/4 p-2">
    //             <img
    //               src={img.src}
    //               alt={img.alt}
    //               className="opacity-80 cursor-pointer w-full h-60 object-cover hover:opacity-100"
    //               onClick={() => handleImageClick(img)}
    //             />
    //           </div>
    //         ))}
    //       </div> 
          
    //        {expandedImgSrc && (
            
    //         <div className=" relative mt-4   flex items-center ">
    //           <div className="relative bg-white w-full h-full p-4 flex items-center justify-center bg-opacity-50">
    //             <span
    //               onClick={() => setExpandedImgSrc('')}
    //               className="absolute top-2 right-2 text-black text-3xl cursor-pointer"
    //             >
    //               &times;
    //             </span>
    //             <img id="expandedImg" src={expandedImgSrc} alt={imgText} className="w-96 h-96 object-cover" />
    //             <div id="imgtext" className="text-center text-black text-xl mt-2">
    //               {imgText}
    //             </div>
    //           </div>
    //         </div>
            
    //       )} 

          
          
    //          <p className="text-lg">Location: {service.county?.county_name}</p>
 
    //          <p className="text-lg">Price: ${service.price} {service.pricing_criteria}</p>
    //          <h2 className="text-xl font-bold">{service.start_date}</h2>  
    //          <div className="relative">
    //            <div className="md:absolute left-6">
    //              <p className="text-lg">{service.description}</p>
    //             </div>
    //           </div> 

    //         <div className='relative mt-10'>
    //           <div className='md:absolute left-6'>
    //             <h2 className="text-xl font-bold">Amenities</h2>
    //               <ul className="list-disc list-inside">
    //                 {service.amenities.map(amenity => (
    //                   <li key={amenity.amenity_id}>{amenity.amenity_name}</li>
    //                 ))}
    //                  <h2 className="text-xl ">Bedroom: {service.bedroom}</h2> 
    //                  <h2 className="text-xl ">Bath: {service.bath}</h2> 
    //                  <h2 className="text-xl ">Beds: {service.beds}</h2>
    //                  <p className="text-xl">Cancellation Policy: {service.cancellation_policy}</p>
    //               </ul>
    //            </div>
    //           </div>
        
 
   
    //     <h6 className="text-xl font-medium mt-4">Hosted By <i>{service.hosts['host_name']}</i></h6>
    //     <h2 className="text-xl font-bold mt-4">Roles</h2>
    //      <ul className="list-disc list-inside">
    //       {service.roles.map(role => (
    //         <li key={role.role_id}>{role.role_name}</li>
    //       ))}
    //     </ul> 

    //     <div className="w-full flex items-center justify-center mt-24">
    //       <Link to={`/booking/${service.service_id}`} className="bg-blue-500 w-72 text-white rounded-full hover:bg-blue-700 flex items-center justify-center py-2">
    //         RESERVE
    //       </Link>
    //     </div>
    //     </div>
    //   );
    // };
    
    // export default HomeDetail;




    import React, { useContext, useState } from 'react';
    import { Link, useParams } from 'react-router-dom';
    import Contact from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Contact.png';
    import { ServicesContext } from '../ServicesProvider';

    const HomeDetail = () => {
      
      const services = useContext(ServicesContext);
      const servicesData = services.servicesData;
      const { id } = useParams();
      const service = servicesData.find(service => service.service_id === parseInt(id, 10));
  
      if (!service) {
        return <p>Service not found</p>;
      }
    
      return (
        <div className="text-center bg-white w-full h-full flex flex-col">
          <h1 className='text-3xl font-bold ml-10 mt-11 mb-4'>Your Comfort is our concern</h1>
          <div className='flex flex-wrap md:ml-10 ml-0'>
          
          <div className='w-full md:w-1/2 mb-4 md:mb-0'>
          <img src={service.images[0].service_image} alt={service.service_name} className="mx-auto lg:ml-20 w-[70%] h-auto rounded" />
          <div className="mt-4 mb-4 mx-auto lg:ml-20">
            <p className="font-bold">{service.service_name}</p>
            <p className="text-lg">Location: {service.county?.county_name}</p>
          </div>
       
          <div className="mb-4 mx-auto lg:ml-20">
          <p className="text-lg">Price: ${service.price} {service.pricing_criteria}</p>
          <h2 className="text-xl font-normal">{service.start_date}</h2>
          </div>

          </div>

          <div className="w-full md:w-1/2 md:pl-3 grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between">
             <img src={service.images[0].service_image} alt={service.service_name} className="w-full h-auto rounded mb-4" />
             <img src={service.images[1].service_image} alt={service.service_name} className="w-full h-auto rounded" />
          </div>
          <div className="flex flex-col justify-between">
            <img src={service.images[2].service_image} alt={service.service_name} className="w-full h-auto rounded mb-4" />
            <img src={service.images[0].service_image} alt={service.service_name} className="w-full h-auto rounded" />
          </div>
        </div>
        </div>
        {/* Host information */}

        <div className="flex items-center mt-4 bg-white p-4">
        <div className="w-3/4 pl-4">
        <img src={Contact} alt="Host Profile" />
        <h6>Hosted By <i>{service.hosts['host_name']}</i></h6>
          <p className="font-bold">Phone: 07xxxxxxxx</p>
          <p className="font-bold">Email: host@gmail.com</p>
          <p className="font-bold">Postal Address:</p>
          <p>Description of the host goes here...</p>
        </div>
      </div>
  
             <div className="relative">
             <h2 className="text-xl font-bold mt-4">Description</h2>
               <div className="md:absolute left-6">
                 <p className="text-lg">{service.description}</p>
                </div>
              </div> 

            <div className='relative mt-10'>
              <div className='md:absolute left-6'>
                <h2 className="text-xl font-bold">Amenities</h2>
                  <ul className="list-disc list-inside">
                    {service.amenities.map(amenity => (
                      <li key={amenity.amenity_id}>{amenity.amenity_name}</li>
                    ))}
                     <h2 className="text-xl ">Bedroom: {service.bedroom}</h2> 
                     <h2 className="text-xl ">Bath: {service.bath}</h2> 
                     <h2 className="text-xl ">Beds: {service.beds}</h2>
                     <p className="text-xl">Cancellation Policy: {service.cancellation_policy}</p>
                  </ul>
               </div>
              </div>
        
 
   
        <h6 className="text-xl font-medium mt-4">Hosted By <i>{service.hosts['host_name']}</i></h6>
        <h2 className="text-xl font-bold mt-4">Roles</h2>
         <ul className="list-disc list-inside">
          {service.roles.map(role => (
            <li key={role.role_id}>{role.role_name}</li>
          ))}
        </ul> 

        <div className="w-full flex items-center justify-center mt-24">
          <Link to={`/booking/${service.service_id}`} className="bg-blue-500 w-72 text-white rounded-full hover:bg-blue-700 flex items-center justify-center py-2">
            RESERVE
          </Link>
        </div>
        </div>
      );
    };
    
    export default HomeDetail;