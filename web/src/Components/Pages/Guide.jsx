// import React from 'react';

// const Guide = () => {
//   const guideData = {
//     name: "Jane Doe",
//     languages: ["English", "Spanish", "French"],
//     number: "+1 (555) 123-4567",
//     email: "jane.doe@tourguide.com",
//     about: "Passionate tour guide with 10 years of experience. Specializing in historical and cultural tours across Europe.",
//     profilePicture: "https://randomuser.me/api/portraits/women/65.jpg",
//     country: "France",
//     businessInfo: {
//       name: "European Adventures Tours",
//       website: "www.europeanadventures.com",
//       founded: 2010,
//       tours: ["Paris Highlights", "Wine Country Excursion", "Mediterranean Coast Tour"]
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-8 md:pt-32">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="md:flex">
//           <div className="md:flex-shrink-0">
//             <img className="h-48 w-full object-cover md:w-48" src={guideData.profilePicture} alt={guideData.name} />
//           </div>
//           <div className="p-8">
//             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{guideData.country}</div>
//             <h1 className="mt-2 text-3xl font-bold text-gray-900">{guideData.name}</h1>
//             <p className="mt-2 text-gray-600">{guideData.email} | {guideData.number}</p>
//             <div className="mt-4">
//               <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
//               <div className="mt-2 flex flex-wrap">
//                 {guideData.languages.map((lang, index) => (
//                   <span key={index} className="mr-2 mb-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
//                     {lang}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-8 py-6 border-t border-gray-200">
//           <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
//           <p className="mt-4 text-gray-600">{guideData.about}</p>
//         </div>
//         <div className="px-8 py-6 bg-gray-50">
//           <h2 className="text-2xl font-bold text-gray-800">Business Information</h2>
//           <div className="mt-4">
//             <p className="text-gray-700"><strong>Company:</strong> {guideData.businessInfo.name}</p>
//             <p className="text-gray-700"><strong>Website:</strong> {guideData.businessInfo.website}</p>
//             <p className="text-gray-700"><strong>Founded:</strong> {guideData.businessInfo.founded}</p>
//             <h3 className="mt-4 text-lg font-semibold text-gray-800">Popular Tours</h3>
//             <ul className="mt-2 list-disc list-inside text-gray-600">
//               {guideData.businessInfo.tours.map((tour, index) => (
//                 <li key={index}>{tour}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Guide;


import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Guide = ({id}) => {
  
  const location = useLocation();
  const { county} = location.state;
  console.log(county)
    const [guideData, setGuideData] = useState(null);
    const [error, setError] = useState(null);
  
    const getData = async () => {
      // const { id }   = useParams();
      try {
        const response = await fetch(`api/analysis/guidebycounty?countyId=${county}`, {
          headers: {
            "ngrok-skip-browser-warning": '69420',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
        console.log(response)
  
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log(data)
          setGuideData(data);
        } else {
          const responseText = await response.text();
          console.error('Response content type:', contentType);
          console.error('Response text:', responseText);
          setError('Invalid response format');
        }
      } catch (error) {
        setError('No Guides found');
        console.error('No Guides found:', error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!guideData) {
      return <p>Loading...</p>;
    }
  
    console.log(guideData);

  return (

<div className="bg-gray-100 min-h-screen p-8 pt-16 md:pt-36">
  <h2 className="text-3xl font-bold mb-6 text-center">Tour Guides Available in this Area</h2>
  {guideData && guideData.length > 0 ? (
    guideData.map((guide, index) => (
      <div key={index} className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={guide.picture || 'path/to/default/image.jpg'} alt={guide.guide_name || 'Guide'} />
          </div>
          <div className="p-8">
           
            <h1 className="mt-2 text-3xl font-bold text-gray-900">{guide.guide_name || 'No name available'}</h1>
            <p className="mt-2 text-gray-600">{guide.email || 'No email'} | {guide.number || 'No number'}</p>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">County ID: {guide.county_id}</div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
              <div className="mt-2 flex flex-wrap">
                {guide.language ? 
                  guide.language.split(',').map((lang, langIndex) => (
                    <span key={langIndex} className="mr-2 mb-2 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {lang.trim()}
                    </span>
                  ))
                  : <span>No languages specified</span>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600">{guide.about || 'No information available'}</p>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-600">No guide data available</p>
  )}
</div>
  );
};

export default Guide;

    // <div className='bg-gray-100 min-h-screen p-8 pt-52'>
    // {guideData.map((guide, index) => (
    //   <div key={index}>
    //     <h1>{guide.guide_name || 'No name available'}</h1>
    //     <p>About: {guide.about}</p>
    //     <p>Email: {guide.email}</p>
        
    //   </div>
    // ))}
    // </div>
