// import React, { useContext, useState } from "react";
// import { RecoveryContext } from "../App";
// import axios from "axios";

// export default function (){
//     const{email, otp, setPage}=useContext(RecoveryContext);
//     const[timerCount,stTimer]=React.useState(60);
//     const[OTPInput, setOTPInput]=useState([0,0,0,0]);
//     const[disable, setDisable]=useState(true);
//     function resendOTP(){
//         if(disable) return;
//         axios
//         .post("url", {
//             OTP:otp,
//             recipient_email:email,


//         })
//         .then(() => setDisable(true))
//         .then(() =>alert ("A new OTP has successfully been sent to your email"))
//         .then(() => FaSpaghettiMonsterFlying(60))
//         .catch (console.log);
//     }

//     React.useEffect(() => {
//         let interval=setInterval(() =>{
//             setTimer((lastTimerCount)=>{
//                 lastTimerCount <=1 && clearInterval(interval);
//                 if(lastTimerCount <=1 ) setDisable(false) ;
//                 if(lastTimerCount <= 0) return lastTimerCount;
//                 return lastTimerCount -1;

                
//             }); 
//          }, 1000);
//          return() => clearInterval(interval);
//     },[disable]);


//     return(
//         <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
//             <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
//                 <div className="mx-auto flex w-full max-w-md flex-col space-y-16 ">
//                     <div className="flex flex-col items-center justify-center text-center space-y-2">
//                         <div className="font-semibold text-3xl">
//                             <p>Emil Verification</p>

//                         </div>
//                         <div className="flex flex-row text-sm font-medium text-gray-400">
//                             <p>We have sent a code to your email{email}</p>



//                         </div>

                        
//                     </div>
//                     <div >
//                         <form>
//                             <div className="flex flex-col space-y-16">
//                                 <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
//                                     <div className="w-16 h-16">
//                                         <input
//                                         maxLength="1"
//                                         className="w-full h-full flex flex-col items-center justify-center text-center px-5"
//                                         type="text"
//                                         name=""
//                                         id=""
//                                         ></input>

//                                     </div>
//                                     <div className="w--16 h-16">
//                                         <input
//                                         maxLength="1"
//                                         className="w-full h-full flex flex-col items-center justify-center text-center px-5"
//                                         type="text"
//                                         name=""
//                                         id=""
                                        
                                        
//                                         >

//                                         </input>

//                                     </div>
//                                     <div className="w-16 h-16">
//                                         className="w-full h-full fex flex-col items-center justify-center text-center px-5" <input
//                                         maxLength="1"
                                       
//                                         >
//                                         </input>

//                                     </div>
//                                     <div className="w-16 h-16">
//                                         <input
//                                         maxLength="1"
//                                         className="w-full h-full flex flex-col items-center justify-center text-center px-5"
//                                         type="text"
//                                         name=""
//                                         id="" 

//                                         ></input>

//                                     </div>

//                                 </div>

//                                 <div className="flex flex-col space-y-5 ">
//                                     <div>
//                                         <a className="flex flex-row cursor-pointer items-center justify-center text-center w-full ">
//                                             Verify Account

//                                         </a>
//                                     </div>
//                                     <div className="flex flex-row items-center justify-center text-center text-sm font-medium ">
//                                         <p>Didn't receive a code ?</p> {" "}
//                                         <a
//                                         className="flex flex-row  items-center"
//                                         style={{
//                                             color:disable? "gray" : "blue",
//                                             cursor : disable ? "none" : "pointer",
//                                             textDecorationLine: disable ? "none " : "underline" ,                                       
//                                         }}
//                                         onClick={() => resendOTP()}

//                                         >
//                                             {disable? `Resend OTP in ${timerCount}s` : "Resend OTP"}

//                                         </a>
//                                     </div>


//                                 </div>
//                             </div>
//                         </form>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }





function ForgotPasswordModal({ onClose }) {
  const [email, setEmail] = useState("");
  // const[error, setError]=useState("");
  const [message, setMessage] = useState("");

  const handleSendResetLink = async () => {
    // e.preventDefault();

    try {
      const response = await axios.post("https://70f2-41-90-101-26.ngrok-free.app/user/resetpasswordlink", { email });
      setMessage("Reset password link sent to your email.");
    } catch (error) {
      setMessage("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-blue-500 rounded-lg p-3 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
        {message && <p className="text-red-500 mt-4">{message}</p>}
        <div className="mt-4 flex justify-between">
          <button onClick={onClose} className="text-blue-950 font-medium">Cancel</button>
          <button onClick={handleSendResetLink} className="text-blue-950 font-medium">Send Reset Link</button>
        </div>
      </div>
    </div>
  );
}




function VerifyOTP({ email, onClose }) {
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post("https://your-api-endpoint/user/verify-otp", { email, otp, newPassword });
      setMessage("Password reset successfully.");
    } catch (error) {
      setMessage("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Verify OTP</h2>
        <div>
          <label className="text-lg font-medium">OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="w-full border-2 border-blue-500 rounded-lg p-3 mt-1 bg-transparent"
            placeholder="Enter the OTP"
          />
        </div>
        <div className="mt-4">
          <label className="text-lg font-medium">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border-2 border-blue-500 rounded-lg p-3 mt-1 bg-transparent"
            placeholder="Enter your new password"
          />
        </div>
        {message && <p className="text-red-500 mt-4">{message}</p>}
        <div className="mt-4 flex justify-between">
          <button onClick={onClose} className="text-blue-950 font-medium">Cancel</button>
          <button onClick={handleVerifyOTP} className="text-blue-950 font-medium">Verify OTP</button>
        </div>
      </div>
    </div>
  );
}











function ForgotPasswordModal({ onClose }) {
  const [email, setEmail] = useState("");
  // const[error, setError]=useState("");
  const [message, setMessage] = useState("");

  const handleSendResetLink = async () => {
    // e.preventDefault();

    try {
      const response = await axios.post("https://e3b9-41-90-101-26.ngrok-free.app/user/resetpasswordlink", { email
      
    }, {
    
    },
);

// Handle successful response
console.log('Password reset email sent successfully', response.data);
setSuccess('Password reset email sent successfully');
setError('');
} catch (error) {
if (error.response) {
 // Backend returned a response with an error status
 console.error('Error response:', error.response);
 setError(`Error: ${error.response.data.message || 'Failed to reset password'}`);
} else if (error.request) {
 // Request was made but no response was received
 console.error('Error request:', error.request);
 setError('No response from server. Please try again later.');
} else {
 // Something happened in setting up the request that triggered an error
 console.error('Error message:', error.message);
 setError(`Error: ${error.message}`);
}
setSuccess('');
}
};


  //     });
  //     setMessage("Reset password link sent to your email.");
  //   } catch (error) {
  //     setMessage("Failed to send reset link. Please try again.");
  //   }
  // };


 



   return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
        <div>
          <label className="text-lg font-medium">Email</label>
          <input 
             type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-blue-500 rounded-lg p-3 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div> 
         {message && <p className="text-red-500 mt-4">{message}</p>}
        <div className="mt-4 flex justify-between">
          <button onClick={onClose} className="text-blue-950 font-medium">Cancel</button>
          <button onClick={handleSendResetLink} className="text-blue-950 font-medium">Send Reset Link</button>
        </div>
      </div> *
     </div> 
   );
 } 
