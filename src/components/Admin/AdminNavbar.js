import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';

const AdminNavbar = () => {
  return (
    <nav>
      <div className="container">
        <h1>Admin Portal</h1>
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/add-hotel">Add Hotel</Link>
          </li>
        </ul>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default AdminNavbar;
