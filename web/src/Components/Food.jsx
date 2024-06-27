import React, { useContext} from 'react';
import { ServicesContext } from './ServicesProvider';



function Food() {
  const services = useContext(ServicesContext);
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);

   //let token = 'eyJ0eXiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc3NDg5MjEsIm5iZiI6MTcxNzc0ODkyMSwiZXhwIjoxNzE3NzUyNTIxLCJkYXRhIjp7InN1YiI6MTQyLCJmaXJzdF9uYW1lIjoiYWRtaW4iLCJzZWNvbmRfbmFtZSI6ImFkbWluIiwicGhvbmUiOiIxMjM0NTgwMCIsImVtYWlsIjoibXdhbmdpQGdtYWlsLmNvbSIsInJvbGVzIjpbImd1ZXN0IiwiYWRtaW4iXX19.tQZ5AAL7OwFP8dQntiRdh5p3AgYxmLmtotP_MRMMOg8'
  const getData = async () => {
    console.log(services);
     
  //   try {
  //     const response = await fetch('api/show/categories',
      
  //       {
  //         headers: {
  //           "ngrok-skip-browser-warning": '69420',
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Origin': '*',
  //            'Authorization': `Bearer ${'token'}`,
      
  //         },
  //       }
  //     );
 
      
      
  //     // console.log(response.json())

  //     const contentType = response.headers.get('content-type');
  //     if (contentType && contentType.includes('application/json')) {
  //       const data = await response.json();
  //       console.log(data)
  //       setProducts(data);
  //     } else {
  //       const responseText = await response.text();
  //       console.error('Response content type:', contentType);
  //       console.error('Response text:', responseText);
        
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //     console.error('Error while getting products', error);
  //   }

   
  };



  return (
    <div className="container mx-auto">
      <button onClick={getData}>click me</button>

    </div>
  );
}

export default Food;




// import React, { useEffect, useState } from 'react';

// function Food() {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5173/api/counties', {
//         headers: {
//           "ngrok-skip-browser-warning": '69420',
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//           'Authorization': `Bearer ${'token'}`,
//         },
//       });

//       console.log(response);

//       const contentType = response.headers.get('content-type');
//       if (contentType && contentType.includes('application/json')) {
//         const data = await response.json();
//         console.log('Data:', data);

//         setProducts(data);
//       } else {
//         const responseText = await response.text();
//         console.error('Response content type:', contentType);
//         console.error('Response text:', responseText);
//       }
//     } catch (error) {
//       setError(error.message);
//       console.error('Error while getting products', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <button onClick={getData}>Click me</button>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       <ul>
//         {products.map((product) => (
//           <li key={product.county_id}>
//             <h2>{product.county_name}</h2>
//             <p>Code: {product.county_code}</p>
//             <a href={product.county_url} target="_blank" rel="noopener noreferrer">
//               View PDF
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Food;






