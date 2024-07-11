
import React from 'react';
import ReactDOM from 'react-dom/client';
 import App from './App.jsx'; 
import Map from './Components/Map.jsx';
import ServicesProvider from './Components/ServicesProvider.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ServicesProvider>
    <  App />  
      {/* <Map />   */}
  </ServicesProvider>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Map from './Components/Map.jsx';
// import ServicesProvider from './Components/ServicesProvider.jsx';

// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ServicesProvider>
//     <Map />
//   </ServicesProvider>
// );


