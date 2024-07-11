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
//       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
//       {!hideNavbarRoutes.includes(location.pathname) && <Hero />}
     
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


// import React from 'react';

// import Weather from './Components/Weather';

// function App() {
//   return (
//     <div className="App">
//       <h1>Weather App</h1>
//       <Weather />
//     </div>
//   );
// }

// export default App;




import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Cities from './Components/Pages/Cities';
import Rooms from './Components/Pages/Rooms'; 
import ContactUs from './Components/ContactUs';
import Weather from './Components/Weather';
import FoodPage from './Components/Pages/FoodPage';
import RoomDetail from './Components/Pages/RoomDetail';
import Booking from "./Components/Pages/Booking" 
import HomePage from './Components/Pages/HomePage';
import CitiesPage from './Components/Pages/CitiesPage';
import Villa from './Components/Pages/Villa';
import VillaPage from './Components/Pages/VillaPage';
import Beach from './Components/Pages/Beach';
import BeachPage from './Components/Pages/BeachPage';
import Mountain from './Components/Pages/Mountain';
import MountainPage from './Components/Pages/MountainPage';
import HomeDetail from './Components/Pages/HomeDetail';
import SignUp from "./Components/SignUp"
import Accomodations from './Components/Pages/Accomodations';
import LogOut from './Components/Pages/LogOut';
import { ServicesContext } from './Components/ServicesProvider';
import Currency from './Components/Currency';
import Profile from './Components/Pages/Profile';
import Map from "./Components/Map"


const App = () => {
  const location = useLocation();
  const [hideNavbarAndHero, setHideNavbarAndHero] = useState(false);

  const services = useContext(ServicesContext);
  const servicesData = services.servicesData;

  useEffect(() => {   
    const hideRoutes = [ '/cities', '/experiences', '/events','/booking/:id', '/login',
       , '/rooms', '/room/:id', '/villa','/villa/:id', '/cities/:id','/beach','/beach/:id',
      '/mountains', '/mountains/:id','/service/:id','/sign-up','/contact-us','/food','/accomodations',
    '/weather','/currency','/profile','/map' ];
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
      {!hideNavbarAndHero && <HomePage data={servicesData}/>}
      <div className="App">
       
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<LogOut/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cities" element={<Cities />} />
        <Route path='/cities/:id' element={<CitiesPage/> } />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/villa" element={<Villa />} />
        <Route path='/villa/:id' element={<VillaPage/> } />
        <Route path="/booking/:id" element={<Booking/>} />
         <Route path="/food" element={<FoodPage />} /> 
         <Route path="/accomodations" element={<Accomodations />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/beach/:id" element={<BeachPage />} />
        <Route path="/mountains" element={<Mountain />} />
        <Route path="/mountains/:id" element={<MountainPage />} />
        <Route path="/service/:id" element={<HomeDetail />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/currency" element={<Currency/>} />
         <Route path="/map" element={<Map/>} /> 
       
      </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
















