// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from '/src/App.jsx'
// // import Food from './Pages/Food.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <App /> 
//      {/* <Food/> */}
//   </React.StrictMode>,
// )

// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Adjust the path as needed

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

