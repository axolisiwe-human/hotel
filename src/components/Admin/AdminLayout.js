import React from 'react';
import AdminNavbar from './AdminNavbar';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default AdminLayout;
