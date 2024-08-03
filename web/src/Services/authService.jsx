
  //  token storage
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

    //  user profile picture


export const setPic = (pic) => {
  localStorage.setItem('pic', pic);
};

export const clearPic = () => {
  localStorage.removeItem('pic');
};

export const getUserPic = () => {
  return localStorage.getItem('pic');
};







