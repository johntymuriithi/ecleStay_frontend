// authService.js

export const getToken = () => {
  return localStorage.getItem('jwtToken');

};

export const setToken = (token) => {
  console.log(token);
  localStorage.setItem('jwtToken', token);
};

export const clearToken = () => {
  localStorage.removeItem('jwtToken');
};

export const getCurrentUser = () => {
  return localStorage.getItem('jwtToken');
};







