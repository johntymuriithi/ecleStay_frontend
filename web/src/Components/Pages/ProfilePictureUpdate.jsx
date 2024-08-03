

// import React, { useState } from 'react';
// import { getToken } from '../../Services/authService';

// const ProfilePictureUpdate = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const token = getToken();

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!selectedFile) {
//       setError('Please select a file first.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('imageFile', selectedFile);

//     try {
//       const response = await fetch('/api/users/update/profilepic', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         },
//         body: formData
//       });

//       if (!response.ok) {
//         throw new Error('Failed to upload profile picture.');
//       }

//       const result = await response.json();
//       console.log(result);
//       setSuccess('Profile picture updated successfully!');
//       setError('');
//     } catch (error) {
//       setError(error.message);
//       setSuccess('');
//     }
//   };

//   return (
//     <div className='w-full h-screen bg-white md:pt-36 pt-16'>
//     <div className="max-w-md mx-auto  mt-56 w-full">
//       <h2 className="text-2xl font-bold mb-4">Update Profile Picture</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">
//             Select Profile Picture
//           </label>
//           <input
//             type="file"
//             id="profilePicture"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="w-1 h-1 p-2 border border-gray-300 rounded"
//           />
//         </div>
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         {success && <div className="text-green-500 mb-4">{success}</div>}
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Upload
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default ProfilePictureUpdate;


import React, { useState, useEffect } from 'react';
import { getToken } from '../../Services/authService';

const ProfilePictureUpdate = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = getToken();

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setError('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('imageFile', selectedFile);

    try {
      const response = await fetch('/api/users/update/profilepic', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload profile picture.');
      }

      const result = await response.json();
      console.log(result);
      setSuccess('Profile picture updated successfully!');
      setError('');
    } catch (error) {
      setError(error.message);
      setSuccess('');
    }
  };

  return (
    <div className='w-full h-screen bg-white md:pt-36 pt-16'>
      <div className="max-w-md mx-auto mt-56 w-full">
        <h2 className="text-2xl font-bold mb-4">Update Profile Picture</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">
              Select Profile Picture
            </label>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </div>
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && <div className="text-green-500 mb-4">{success}</div>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePictureUpdate;