import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import LogoutButton from '../Auth/LogoutButton'; // Import the LogoutButton

const Navbar = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <nav>
      <div className="container">
        <h1>Tembisan Hotel</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/admin/add-hotel">Add Hotel</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
        {user && <LogoutButton />} {/* Show the logout button when user is logged in */}
      </div>
    </nav>
  );
};

export default Navbar;
