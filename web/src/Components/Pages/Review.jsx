import React, { useState } from 'react';

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: '',
      host_id: '',
      service_id: '',
      description: '',
      rating: '',
      cleanliness: '',
      location: '',
      communication: '',
      days_stayed: '',
    },
    // Add more users as needed
  ]);

  const handleInputChange = (id, field, value) => {
    setReviews(reviews.map(user =>
      user.id === id ? { ...user, [field]: value } : user
    ));
  };

  const handleProfilePicChange = (id, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setReviews(reviews.map(user =>
        user.id === id ? { ...user, profilePic: reader.result } : user
      ));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Kindly rate</h2>
        {reviews.map((user) => (
          <div key={user.id} className="space-y-4">
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={user.name}
              onChange={(e) => handleInputChange(user.id, 'name', e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Host ID"
              value={user.host_id}
              onChange={(e) => handleInputChange(user.id, 'host_id', e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Service ID"
              value={user.service_id}
              onChange={(e) => handleInputChange(user.id, 'service_id', e.target.value)}
            />
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Write your review here..."
              value={user.description}
              onChange={(e) => handleInputChange(user.id, 'description', e.target.value)}
            />
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Overall Rating"
              value={user.rating}
              onChange={(e) => handleInputChange(user.id, 'rating', e.target.value)}
            />
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Cleanliness"
              value={user.cleanliness}
              onChange={(e) => handleInputChange(user.id, 'cleanliness', e.target.value)}
            />
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Location"
              value={user.location}
              onChange={(e) => handleInputChange(user.id, 'location', e.target.value)}
            />
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Communication"
              value={user.communication}
              onChange={(e) => handleInputChange(user.id, 'communication', e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Days Stayed"
              value={user.days_stayed}
              onChange={(e) => handleInputChange(user.id, 'days_stayed', e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;






  