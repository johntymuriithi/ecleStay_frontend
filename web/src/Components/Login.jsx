export default function Login() {
  return (
    <div className="flex border-4 border-blue-500 rounded-3xl">
            {/* Welcome thingy to be here */}
        <div className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all
        hidden lg:flex items-center justify-center bg-blue-950 lg:w-1/2 rounded-r-3xl'>
          <div className='w-72 h-84 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce relative'>
            <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'>
              <p className="text-white text-lg font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Welcome to EcleStay</p>
            </div>
          </div>
          <div className='absolute bottom-5 text-white text-lg'></div>
        </div>

        {/* LOgin thingy here */}
        <div className='blue-500 p-8 rounded-3xl'>
      <h1 className='text-5xl font-semibold'>EcleStay</h1>
      <p className='font-medium text-x1 text-gray-500 mt-4'>Please enter your details.</p>
      <div className='mt-8'>
        <div>
          <label className='text-lg font-medium'>Email</label>
          <input
            type="email"
            className='w-full border-2 border-blue-500 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your email'
          />
        </div>
        <div className='mt-4'>
          <label className='text-lg font-medium'>Password</label>
          <input
            type="password"
            className='w-full border-2 border-blue-500 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Enter your password'
          />
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input type="checkbox" id='remember' />
            <label className='ml-2 font-medium text-base' htmlFor='remember'>Remember for 30 days</label>
          </div>
          <button className='font-medium text-base text-blue-950'>Forgot Password</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 px-6 flex-items-center
          bg-blue-950
           rounded-xl bg-blue-500 text-white text-lg font-bold border-2 border-blue-950'>Sign in</button>
          <div className="flex items-center justify-center mt-3">
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex items-center bg-blue-950 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium
            text-gray-800 dark:text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px"
              height="800px" viewBox="0 0 48 48" version="1.1">
                <title>Google-color</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                      <path d="M9.82727273,24.5454545 C9.82727273,23.8181818 9.75454545,23.0909091 9.67272727,22.3636364 L4.09090909,22.3636364 L4.09090909,24.5454545 L9.82727273,24.5454545 Z" id="Shape" fill="#FBBC05"></path>
                      <path d="M24.5454545,15.5454545 C25.7818182,15.5454545 27.0545455,15.8636364 28.1090909,16.5090909 L32.3272727,12.2909091 C30.1818182,10.5454545 27.5272727,9.45454545 24.5454545,9.45454545 C17.7454545,9.45454545 12.3636364,14.2909091 9.81818182,20.5454545 L14.5454545,24.5454545 C15.6181818,20.4181818 19.8727273,17.4545455 24.5454545,17.4545455 C27.5090909,17.4545455 29.9272727,18.9090909 31.4545455,21.2363636 L24.5454545,21.2363636 L24.5454545,24.5454545 L37.0909091,24.5454545 C37.0909091,23.4181818 37.0909091,22.3636364 37.0909091,21.2363636 C37.0909091,18.0727273 35.7272727,15.6181818 33.6727273,13.9090909 L28.1090909,18.6181818 C27.2727273,16.9818182 25.7818182,15.5454545 24.5454545,15.5454545 Z" id="Shape" fill="#EA4335"></path>
                      <path d="M14.5454545,27.2727273 L9.81818182,31.2727273 C12.3636364,37.5272727 17.7454545,42.3636364 24.5454545,42.3636364 C27.5272727,42.3636364 30.1818182,41.2727273 32.3272727,39.5272727 L28.1090909,35.3090909 C27.0545455,35.9545455 25.7818182,36.2727273 24.5454545,36.2727273 C19.8727273,36.2727273 15.6181818,33.3090909 14.5454545,29.1818182 L9.81818182,33.2727273 L9.81818182,29.1818182 L14.5454545,27.2727273 Z" id="Shape" fill="#34A853"></path>
                      <path d="M37.0909091,24.5454545 L37.0909091,28.9090909 L32.5454545,28.9090909 L32.5454545,24.5454545 L28.1090909,24.5454545 L28.1090909,28.9090909 L23.0909091,28.9090909 L23.0909091,24.5454545 L18.6545455,24.5454545 L18.6545455,28.9090909 L14.5454545,28.9090909 L14.5454545,24.5454545 L9.81818182,24.5454545 L9.81818182,29.1818182 L14.5454545,33.2727273 L14.5454545,29.1818182 L18.6545455,29.1818182 L18.6545455,33.2727273 L23.0909091,33.2727273 L23.0909091,29.1818182 L28.1090909,29.1818182 L28.1090909,33.2727273 L32.5454545,33.2727273 L32.5454545,29.1818182 L37.0909091,29.1818182 L37.0909091,33.2727273 L41.0909091,33.2727273 L41.0909091,28.9090909 L37.0909091,28.9090909 L37.0909091,24.5454545 Z" id="Shape" fill="#4285F4"></path>
                    </g>
                  </g>
                </g>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
      <div className='mt-8 flex justify-center items-center'>
        <p className='font-medium text-base'>Don't have an account?</p>
        <button className='text-blue-950 text-base font-medium ml-2'>Sign up</button>
      </div>
    </div>
      </div>
  )
}
