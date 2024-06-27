import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">EcleStay</h2>
          <p className="text-gray-400">123 Street, City, Country</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@eclestay.com</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-500">
        <p>&copy; 2024 EcleStay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
