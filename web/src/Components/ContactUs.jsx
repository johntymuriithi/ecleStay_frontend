import {Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <section className="bg-gray-300 py-8 flex justify-center items-center min-h-screen">
       <div className="max-w-4xl w-full bg-white p-8 shadow-md rounded-md"> 
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-gray-700 mt-4">For any inquiries, you can reach us through our platforms</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <ContactInfo
            icon={faMapMarkerAlt}
            title="Address"
            details={["4654 Mamlaka Road,", "Montana, Chicago,", "5555"]}
          />
          <ContactInfo
            icon={faPhone}
            title="Phone"
            details={["098854323456"]}
          />
          <ContactInfo
            icon={faEnvelope}
            title="Email"
            details={["valochi@gmail.com"]}
          />
        </div>
        <div className="bg-white p-8 shadow-md rounded-md">
          <form>
            <h2 className="text-2xl font-bold mb-6">Send Message</h2>
            <InputBox type="text" placeholder="Full Name" />
            <InputBox type="email" placeholder="Email" />
            <InputBox type="textarea" placeholder="Message" />
            <input
              type="submit"
              value="Send"
              className="w-full p-3 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
            />
                    <Link to="/" className="w-full block mt-2 text-center bg-gray-500 text-white font-bold py-2 px-4 rounded">
          Cancel
        </Link>
          </form>
        </div>

        
       </div> 
    </section>
  );
};

const ContactInfo = ({ icon, title, details }) => (
  <div className="bg-white p-6 shadow-md rounded-md text-center">
    <div className="mb-4 text-blue-500 text-3xl">
      <FontAwesomeIcon icon={icon} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {details.map((detail, index) => (
      <p key={index} className="text-gray-700">{detail}</p>
    ))}
  </div>
);

const InputBox = ({ type, placeholder }) => (
  <div className="mb-6">
    {type === "textarea" ? (
      <textarea
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        type={type}
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    )}
  </div>
);

export default ContactUs;




