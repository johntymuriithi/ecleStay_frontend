import React, { useState, useEffect} from 'react';

const Review = ({ reviewerName, reviewText, rating }) => {
    const [reviews, setReviews] = useState([]);
    const[error, setError]=useState([null]);

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
                }, []);
                console.log(reviews);
            
          
    return(
        <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Host Reviews</h1>
            <div id="reviewsContainer">
              {reviews.map((review, index) => (
                 <div key={index} className="border p-4 mb-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{review.reviewerName}</h3>
                <div className="flex items-center mb-2">
                <p className="text-sm text-gray-500">{review.date}</p>
                <Rating rating={review.rating} />
              </div>
               <p>{review.reviewText}</p>
               </div>

        ))}
      </div>
      
      
      </div>
    )
}

export default Review;
