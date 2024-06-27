import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearToken } from '../../Services/authService'; // Correct path

function LogOut() {
  const navigate = useNavigate();

  useEffect(() => {
    clearToken();
    alert('You are currently logged out, please log in to continue');
    navigate('/login');
  }, [navigate]);

  return null;
}

export default LogOut;
