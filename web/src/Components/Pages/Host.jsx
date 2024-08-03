import React, { useState, useEffect } from 'react';
import { getToken } from '../../Services/authService';

const Host = ({ show, onClose, order, onReviewSubmit }) => {
    const [rating, setRating] = useState(0);
    const [description, setReview] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = getToken();
    
        if (!token) {
          setError('You must be logged in to submit a review');
          return;
        }
    
        const reviewData = {
          host_id: order.host_id,
          service_id: order.service_id,
          description,
          rating,
        };

        try {
            const response = await fetch('/api/review/host', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify(reviewData),
            });

      
            if (!response.ok) {
              const errorData = await response.json();
              console.log( errorData)
              setError(errorData.message || 'An error occurred');
            } else {
              setSuccessMessage('Review Submitted Successfully');
              console.log('Review submitted successfully:');
              setError('');
            }
          } catch (error) {
            setError('Network error');
            console.error('Network error:', error);
          }
        };
      
  return (
    show && (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
    <div className="bg-blue-100 rounded-lg p-6 w-full max-w-md mx-auto">
        <h3 className="text-lg font-bold mb-4 text-center">Review Host</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Rating
                </label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Review
                </label>
                <textarea
                    value={description}
                    onChange={(e) => setReview(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                ></textarea>
            </div>

            {error && <p className="col-span-2 text-red-500 text-center mt-4">{error}</p>}
            {successMessage && <p className="success col-span-2 text-green-500 text-center mt-4">{successMessage}</p>}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto "
                >
                    Submit Review
                </button>
                <button
                    onClick={onClose}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
</div>
    )
);
};

export default Host