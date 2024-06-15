// src/components/HelpPage.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import React from 'react';

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='bg-gray-300 flex justify-center items-center min-h-screen'>
      <div className='max-w-4xl w-full bg-white shadow-md rounded-md p-8'>
      
    <div className="text-center mb-8 p-6">
      <h1 className="text-4xl font-bold ">Help</h1>
      <p className='text-gray-700 mt-4'>You can find any kind of help using the following resources</p>
      </div>
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <Guides />
      <FAQ />
      <ContactSupport />
      <Glossary />
      <Feedback />
      <Link to="/" className="w-full block mt-2 text-center bg-gray-500 text-white font-bold py-2 px-4 rounded">
          Cancel
        </Link>

      
    </div>
    </div> 
  );
};

const SearchBar = ({ searchTerm, handleSearchChange }) => (
  <div className="flex justify-center mb-6">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="border rounded-l p-2 w-80"
    />
    <button className="bg-blue-500 text-white rounded-r px-4 py-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
</svg>
</button>
  </div>
);

const Guides = () => (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">Guides</h2>
    <p className="text-gray-600">Comprehensive guides on using our website and services.</p>
  </section>
);

const FAQ = () => (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
    <p className="text-gray-600">Find answers to the most common questions.</p>
  </section>
);

const ContactSupport = () => (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">Contact Support</h2>
    <p className="text-gray-600">Reach out to our support team via email, phone, or live chat.</p>
  </section>
);

const Glossary = () => (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">Glossary</h2>
    <p className="text-gray-600">Understand specific terminology used on our website.</p>
  </section>
);

const Feedback = () => (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">Feedback</h2>
    <p className="text-gray-600">Provide feedback to help us improve our services.</p>
  </section>
 
);



export default HelpPage;
