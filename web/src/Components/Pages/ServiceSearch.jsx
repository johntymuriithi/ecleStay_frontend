// import React, { useState } from 'react';

// function ServiceSearch({ onSearchResults }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await fetch(`api/searchBy/service?type=${encodeURIComponent(searchTerm)}`);
//       console.log(response)

//       const data = await response.json();
//       console.log(data)
//       onSearchResults(data);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//     } catch (err) {
//       setError('An error occurred while searching. Please try again.');
//       console.error('Search error:', err);
//       onSearchResults([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Search Services</h2>
//       <form onSubmit={handleSearch} className="mb-6">
//         <div className="flex">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Enter service type"
//             className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Search
//           </button>
//         </div>
//       </form>

//       {isLoading && <p>Loading...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// }

// export default ServiceSearch;

import React, { useState } from 'react';

function ServiceSearch({ onSearchResults, type_name }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
        const response = await fetch(`api/searchBy/service?type=${type_name}`);
      console.log(response);
      
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred while fetching the data');
        onSearchResults([]);
      } else {
        const data = await response.json();
        
        onSearchResults(data); // Pass the search results back to the parent component
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error:', err);
      onSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter service type"
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default ServiceSearch;
