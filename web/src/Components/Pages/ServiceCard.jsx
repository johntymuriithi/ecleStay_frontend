import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  console.log('Rendering ServiceCard:', service.service_id, service.images[0].service_image);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col card-img-container z-0">
      <Link to={`/service/${service.service_id}`}>
        <div className="relative w-full h-56 md:h-56 overflow-hidden">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
          {!imageError && (
            <img 
              src={service.images[0].service_image} 
              alt={service.service_name} 
              className={`w-full h-full object-cover transition-opacity duration-500  ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => {
                console.log('Image loaded:', service.images[0].service_image);
                setImageLoaded(true);
              }}
              onError={(e) => {
                console.error('Image load error:', service.images[0].service_image, e);
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          )}
          {imageError && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
              Image not available
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-bold">{service.service_name}</h2>
        <p className="text-gray-800 mt-2">{service.price} {service.pricing_criteria}</p>
        <h6 className="text-xl font-medium">Hosted By <i>{service.hosts['host_name']}</i></h6>
      </div>
    </div>
  );
}

export default ServiceCard;
