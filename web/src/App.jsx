
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './Components/Hero';
import Reset from './Components/Reset';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import ContactUs from './Components/ContactUs';
import Weather from './Components/Weather';
import FoodPage from './Components/Pages/FoodPage';
import Booking from "./Components/Pages/Booking" 
import HomePage from './Components/Pages/HomePage';
import HomeDetail from './Components/Pages/HomeDetail';
import SignUp from "./Components/SignUp"
import Accomodations from './Components/Pages/Accomodations';
import LogOut from './Components/Pages/LogOut';
import { ServicesContext } from './Components/ServicesProvider';
import Currency from './Components/Currency';
import Profile from './Components/Pages/Profile';
import Map from "./Components/Map"
import Orders from './Components/Pages/Orders';
import Account from './Components/Pages/Account';
import Guide from './Components/Pages/Guide';
import Events from './Components/Pages/Events';
import Experience from './Components/Pages/Experience';
import ProfilePictureUpdate from './Components/Pages/ProfilePictureUpdate';


const App = () => {
  const [hideNavbarAndHero, setHideNavbarAndHero] = useState(false);
  const location = useLocation();
  const services = useContext(ServicesContext);
  const servicesData = services.servicesData;

  useEffect(() => {   
    const hideRoutes = [ '/cities', '/experiences', '/events','/booking/:id', '/login',
       , '/rooms', '/room/:id', '/villa','/villa/:id', '/cities/:id','/beach','/beach/:id',
      '/mountains', '/mountains/:id','/service/:id','/sign-up','/contact-us','/food','/accomodations',
    '/weather','/currency','/map','/profile/account','/profile/orders','/profile','/guide','/events','/experiences', '/profile/pic','/reset' ];
    const shouldHide = hideRoutes.some(route => {
      const regex = new RegExp(`^${route.replace(/:\w+/g, '\\w+')}$`);
      return regex.test(location.pathname);
    });

    setHideNavbarAndHero(shouldHide);
  }, [location.pathname]);

  return (

    <div>
      <Navbar />
      {!hideNavbarAndHero && (
        <div>

          <Hero />
          <HomePage data={servicesData} />
        </div>
      )}

      <div className="App">
   
       
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/account" element={<Account />} />
        <Route path="/profile/pic" element={<ProfilePictureUpdate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<LogOut/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/booking/:id" element={<Booking/>} />
         <Route path="/food" element={<FoodPage />} /> 
         <Route path="/accomodations" element={<Accomodations />} />
         <Route path="/events" element={<Events />} />
         <Route path="/experiences" element={<Experience />} />
        <Route path="/service/:id" element={<HomeDetail />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/currency" element={<Currency/>} />
         {/* <Route path="/map" element={<Map/>} />  */}
         
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





