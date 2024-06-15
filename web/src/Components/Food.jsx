import React, { useEffect, useState } from 'react';
 import { getToken,clearToken } from '../Services/authService';


function Food() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

   //let token = 'eyJ0eXiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc3NDg5MjEsIm5iZiI6MTcxNzc0ODkyMSwiZXhwIjoxNzE3NzUyNTIxLCJkYXRhIjp7InN1YiI6MTQyLCJmaXJzdF9uYW1lIjoiYWRtaW4iLCJzZWNvbmRfbmFtZSI6ImFkbWluIiwicGhvbmUiOiIxMjM0NTgwMCIsImVtYWlsIjoibXdhbmdpQGdtYWlsLmNvbSIsInJvbGVzIjpbImd1ZXN0IiwiYWRtaW4iXX19.tQZ5AAL7OwFP8dQntiRdh5p3AgYxmLmtotP_MRMMOg8'
  const getData = async () => {
     const token=getToken();
    try {
      const response = await fetch('api/counties',
      
        {
          headers: {
            "ngrok-skip-browser-warning": '69420',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
             'Authorization': `Bearer ${'token'}`,
      
          },
        }
      );
  //       useEffect(() => {
  //   getData();
  // }, []);
      
      
      console.log(response)

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log('Data:', data);

        console.log(data)
        setProducts(data);
        var roles, counties;
        var [roles, counties, ...rest] = data;
        console.log(roles.roles)
      } else {
        const responseText = await response.text();
        console.error('Response content type:', contentType);
        console.error('Response text:', responseText);
        // Handle non-JSON responses here
      }
    } catch (error) {
      setError(error.message);
      console.error('Error while getting products', error);
    }

    // console.log('First county:', Data[0]);
  };

  // useEffect(() => {
  //   axios.get("https://c78a-41-90-101-26.ngrok-free.app/show/hosts", {headers: {
  //       "ngrok-skip-browser-warning": "69420",
  //       }})

  //     .then(res => {
  //       if (res.headers['content-type'].includes('application/json')) {
  //         setProducts(res.data);
  //       } else {
  //         console.error('Response is not JSON:', res.data);
  //       }
  //     })
  //     .catch(err => console.error('Error while getting products', err));
  // }, []);

  return (
    <div className="container mx-auto">
      <button onClick={getData}>click me</button>
      {/* <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((data) => (
          <div key={index} className="border p-4">
            <h2 className="text-xl font-semibold mb-2">Product {index + 1}</h2>
            <ul>
              {Object.(product).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <strong>{key}:</strong> <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Food;


