// src/services/api.js
import { getCurrentUser } from './authService';

export const fetchUserData = async () => {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    throw new Error('No authenticated user found');
  }

  try {
    const response = await fetch('/api/user/data', {
      headers: {
        Authorization: `Bearer ${currentUser}`,
      },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not in JSON format');
      }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
