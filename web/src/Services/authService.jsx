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
setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc3NTQxODEsIm5iZiI6MTcxNzc1NDE4MSwiZXhwIjoxNzE3NzU3NzgxLCJkYXRhIjp7InN1YiI6MTQyLCJmaXJzdF9uYW1lIjoiYWRtaW4iLCJzZWNvbmRfbmFtZSI6ImFkbWluIiwicGhvbmUiOiIxMjM0NTgwMCIsImVtYWlsIjoibXdhbmdpQGdtYWlsLmNvbSIsInJvbGVzIjpbImd1ZXN0IiwiYWRtaW4iXX19.Q6V_tJP4V1EtR3tLC4DgA4pGoZQy9-W7-z_SESeq1UY");



// import Cookies from 'js-cookie';

// // Use a meaningful name for your cookie, like 'auth_token'
// export const setToken = (token) => {
//   Cookies.set('auth_token', token, { expires: 1, secure: true, sameSite: 'Strict' });
// };

// export const getToken = () => {
//   return Cookies.get('auth_token');
// };

// export const clearToken = () => {
//   Cookies.remove('auth_token');
// };
