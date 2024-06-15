
// import React, { useState } from 'react';

// const Booking = () => {
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [guests, setGuests] = useState('');
//   const [message, setMessage] = useState('');
//   const [termsChecked, setTermsChecked] = useState(false); // State for terms checkbox

//   // State for cancellation policy
//   const [cancellationPolicy] = useState(`
//     Cancellation Policy:
//     - Cancellations made more than 7 days before check-in date: Full refund.
//     - Cancellations made 7 days or less before check-in date: 50% refund.
//     - No-shows or early check-outs: No refund.
//   `);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!termsChecked) {
//       alert('Please agree to the terms and conditions.');
//       return;
//     }
//     // Here you can handle form submission logic, such as sending a booking request
//     // and the message to the host
//     alert(`Check-in: ${checkInDate}, Check-out: ${checkOutDate}, Guests: ${guests}, Message: ${message}`);
//   };

//   return (
//     <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
//       <h1 className="text-3xl font-bold mb-4 text-center">Request to Book</h1>
//       <div className="bg-white p-6 rounded-lg w-full md:w-1/2">
        

//         {/* Reservation Form */}
//         <form onSubmit={handleSubmit} className="flex flex-col items-center">
//           <input
//             className="w-full md:w-1/2 p-2 mb-4 border border-gray-300 rounded"
//             type="date"
//             value={checkInDate}
//             onChange={(e) => setCheckInDate(e.target.value)}
//             placeholder="Check In"
//             required
//           />
//           <input
//             className="w-full md:w-1/2 p-2 mb-4 border border-gray-300 rounded"
//             type="date"
//             value={checkOutDate}
//             onChange={(e) => setCheckOutDate(e.target.value)}
//             placeholder="Check Out"
//             required
//           />
//           <input
//             className="w-full md:w-1/2 p-2 mb-4 border border-gray-300 rounded"
//             type="number"
//             value={guests}
//             onChange={(e) => setGuests(e.target.value)}
//             placeholder="Guests"
//             required
//           />

//           {/* Message the Host */}
//           <textarea
//             className="w-full p-2 mb-4 border border-gray-300 rounded"
//             rows="4"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type your message to the host..."
//           />

//           {/* Terms and Conditions Checkbox */}
//           <label className="flex items-center mb-4">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={termsChecked}
//               onChange={(e) => setTermsChecked(e.target.checked)}
//             />
//             I agree to the <a href="/terms-and-conditions" className="text-blue-500 underline">Terms and Conditions</a>
//           </label>

//           {/* Cancellation Policy */}
//           <div className="text-left mb-4">
//             <h2 className="font-bold text-xl mb-2">Cancellation Policy</h2>
//             <p>{cancellationPolicy}</p>
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Send Request
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;


import React from 'react';
import Room2 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room2.jpg';
import Room3 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room3.jpg';
import Room4 from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/Room4.jpg';

const Booking = () => {
  return (
    <div className="min-h-screen bg-blue-500 py-12 px-4 ">
      <div className='bg-white md:ml-8 ml-0 md:mr-8 mr-0'>
          {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 mt-4">Booking Page</h1>
        <p className="text-gray-600 mb-8">Experience something new every moment</p>
      </div>
      <div className="hidden md:show relative">
  <button onClick={() => history.goBack()} className="absolute  left-4 bg-blue-500 hover:bg-blue-600 text-white font-bold top-0 py-4 px-6 rounded">
    Back
  </button>
  {/* Your other content here */}
</div>


        {/* Rooms */}
      <div className="flex justify-center  md:space-x-4 mb-8">
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-full" src={Room2} alt="Room 2" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Room 2</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-full" src={Room3} alt="Room 3" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Room 3</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-full" src={Room4} alt="Room 4" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Room 4</div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg ">
        {/* Room Type Selection */}
         <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Room Type</label>
          <select className="form-select mt-1 block w-full py-2 border-black border-2 
          rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring
           focus:ring-blue-500 focus:ring-opacity-50">
            <option>Select room type</option>
            <option>Single Room</option>
            <option>Double Room</option>
            <option>Suite</option>
          </select>
        </div> 

        {/* Number of Guests */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
          <select className="form-select mt-1 block w-full py-2 border-black border-2 rounded-md shadow-sm text-lg focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
            <option>Select number of guests</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        

        {/* Check-in Date and Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Check-in Date and Time</label>
          <input type="datetime-local" className="form-input mt-1 block w-full text-lg 
          rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 
          focus:ring-opacity-50 border-black border-2" />
        </div>

        {/* Check-out Date and Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Check-out Date and Time</label>
          <input type="datetime-local" className="form-input mt-1 block w-full border-black border-2 text-lg
          rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>

        {/* Free Pick */}
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium text-gray-700">Free Pick?</label>
          <div className="ml-2 flex items-center">
            <input type="radio" id="free-pick-yes" name="free-pick" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="free-pick-yes" className="ml-2">Yes</label>
          </div>
          <div className="ml-4 flex items-center">
            <input type="radio" id="free-pick-no" name="free-pick" className="form-radio h-5 w-5 text-blue-600" />
            <label htmlFor="free-pick-no" className="ml-2">No</label>
          </div>
        </div>

        {/* Type of Vehicles */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Type of Vehicles</label>
          <select className="form-select mt-1 block w-full border-black rounded-md text-lg
          shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 
          focus:ring-opacity-50">
            <option>Select vehicle type</option>
            <option>Car</option>
            <option>Van</option>
            <option>Motorcycle</option>
            <option>Bicycle</option>
          </select>
        </div>

        {/* Additional Requests */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Additional Requests</label>
          <textarea rows="3" className="form-textarea mt-1 block w-full border-black rounded-md shadow-sm 
         border-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Booking;


