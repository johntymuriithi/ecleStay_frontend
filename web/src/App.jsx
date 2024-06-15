// import React from "react";
// import Booking from "./Components/Pages/Booking";
// const App = () =>{
//   return (
//     <>
//     <Booking/>
//     </>
//   )
// }
// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
// import Hero from './Components/Hero';
// import Navbar from './Components/Navbar';
// import ContactUs from './Components/ContactUs';
// import Food from './Components/Food';
// import Login from './Components/Login';
// import Cities from './Components/Pages/Cities';
//  import HotelPage from "./Components/Pages/HotelPage";
// import Rooms from "./Components/Pages/Rooms";
// const App = () => {
//   const location = useLocation();
//   const hideNavbarRoutes = ['/suites', '/food', '/experiences', '/events'];

//   return (
  
//      <div>
//       <HotelPage/>
      // {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      // {!hideNavbarRoutes.includes(location.pathname) && <Hero />}
     
//        <Routes>
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/food" element={<Food />} />
//         <Route path="/login" element={<Login/>} />
//          <Route path='/cities' element={<Cities/>} />  
//         {/* <Route path="/beach" element={<Beach/>} /> */}
//         <Route path="/rooms" element={<Rooms/>} />
//          {/* <Route path="/rooms/:id" element={<HotelPage />} />  */}
       
//       </Routes> 
      
//     </div> 
  

//   );
// };

// const AppWrapper = () => (
//   <Router>
//     <App />
//   </Router>
// );




import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Cities from './Components/Pages/Cities';
import Rooms from './Components/Pages/Rooms'; 
import ContactUs from './Components/ContactUs';
import Food1 from './Components/Pages/Food1';
import FoodPage from './Components/Pages/FoodPage';
import RoomDetail from './Components/Pages/RoomDetail';
import Booking from "./Components/Pages/Booking" 
import HomePage from './Components/Pages/HomePage';

const foodData = [
  // Your food data objects here
];

const App = () => {
  const location = useLocation();
  const [hideNavbarAndHero, setHideNavbarAndHero] = useState(false);

  useEffect(() => {
    const hideRoutes = ['/suites', '/food', '/experiences', '/events','/booking', '/login', '/food', '/food/:id', '/rooms', '/room/:id'];
    const shouldHide = hideRoutes.some(route => {
      const regex = new RegExp(`^${route.replace(/:\w+/g, '\\w+')}$`);
      return regex.test(location.pathname);
    });

    setHideNavbarAndHero(shouldHide);
  }, [location.pathname]);

  return (
    <div>
       <Navbar />
      {!hideNavbarAndHero && <Hero />}
      {!hideNavbarAndHero && <HomePage />}
      
      
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/food" element={<Food1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/food/:id" element={<FoodPage foodData={foodData} />} />
        <Route path="/room/:id" element={<RoomDetail />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
















