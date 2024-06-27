import Cookies from 'js-cookie';

// Set the token in a cookie
export const setToken = (token) => {
  // The token parameter will be the actual JWT token you receive
  Cookies.set('auth_token', token, { expires: 1, secure: true, httpOnly: true, sameSite: 'Strict' });
};

// Retrieve the token from a cookie
export const getToken = () => {
  // The name of the cookie from which to retrieve the token is 'auth_token'
  return Cookies.get('auth_token');
};

// Clear the token from a cookie
export const clearToken = () => {
  // The name of the cookie to remove is 'auth_token'
  Cookies.remove('auth_token');
};






