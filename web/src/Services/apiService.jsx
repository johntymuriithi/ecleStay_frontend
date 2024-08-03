// src/services/api.js
import { getCurrentUser } from './authService';

export const fetchUserData = async () => {
  let data1 = ""

  const currentUser = getCurrentUser();

  if (!currentUser) {
    throw new Error('No authenticated user found');
  }

  try {
    const response = await fetch('/api/get/guest/bookings', {
      headers: {
        "ngrok-skip-browser-warning": '69420',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${currentUser}`,
      },
    });

    if (!response.ok) {
      data1  = await response.json()
      console.log(data1);
        throw new Error('Failed to fetch user data');
      }

      let data = (await response.json()).data;
      return data;
  } catch (error) {
    throw error;
  }
};

