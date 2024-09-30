import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate('/login'); // Navigate to login after logout
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
