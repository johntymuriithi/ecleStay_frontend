import React, { useState } from 'react';


  const HostReview = ({reviews = [], togglePopup }) => {

  
    console.log('Reviews:', reviews);

  const [visibleReviews, setVisibleReviews] = useState(2);
  const showMoreReviews = (event) => {
    event.stopPropagation(); 
    setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 2);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={togglePopup}>
  <div className="bg-white rounded-lg shadow-lg p-8 w-1/2 max-h-[80%] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
 
    {reviews.slice(0, visibleReviews).map((review, index) => (
      <div key={review.review_id || `review-${index}`} className="mb-4">
        <div className="flex items-start">
          <img
            src={review.userPic}
            alt="Reviewer Profile"
            className="w-6 h-6 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-bold">{review.userName}</h3>
            <p>{review.content}</p>
          </div>
        </div>
      </div>
    ))}
    {visibleReviews < reviews.length && (
      <button onClick={showMoreReviews} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded space-x-4]">
        Show More
      </button>
    )}
    <button onClick={(e) => {
        e.stopPropagation();
        togglePopup();
      }} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
      Close
    </button>
  </div>
</div>
  );
};

export default HostReview;


// import React, { useState, useEffect, useContext } from 'react';

// const HostReview = ({ reviews = [], togglePopup }) => {
//   console.log('Reviews:', reviews);

//   const [visibleReviews, setVisibleReviews] = useState(2);

//   const showMoreReviews = (event) => {
//     event.stopPropagation(); 
//     setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 2);
//   };

//   if (!reviews || reviews.length === 0) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={togglePopup}>
//         <div className="bg-white rounded-lg shadow-lg p-8 w-1/2" onClick={(e) => e.stopPropagation()}>
//           <p>No reviews available.</p>
//           <button onClick={togglePopup} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={togglePopup}>
//       <div className="bg-white rounded-lg shadow-lg p-8 w-1/2 max-h-[80%] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
//         {reviews.slice(0, visibleReviews).map((review, index) => (
//           <div key={review.review_id || `review-${index}`} className="mb-4">
//             <div className="flex items-start">
//               <img
//                 src={review.userPic}
//                 alt="Reviewer Profile"
//                 className="w-16 h-16 rounded-full mr-4"
//               />
//               <div>
//                 <h3 className="text-lg font-bold">{review.userName}</h3>
//                 <p>{review.content}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//         {visibleReviews < reviews.length && (
//           <button onClick={showMoreReviews} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
//             Show More
//           </button>
//         )}
//         <button onClick={(e) => {
//           e.stopPropagation();
//           togglePopup();
//         }} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HostReview;