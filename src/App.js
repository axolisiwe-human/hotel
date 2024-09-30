import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/Admin/AdminLayout';
import UserLayout from './components/User/UserLayout';
import Home from './components/User/Home';
import LoginForm from './components/Auth/LoginForm';
import RegistrationForm from './components/Auth/RegistrationForm';
import AdminDashboard from './components/Admin/HotelList';
import AddHotel from './components/Admin/HotelForm';
import { getAuth } from 'firebase/auth';

// Protect Admin Routes
const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // Check if user is logged in and is an admin
  if (user && user.email === 'admin@example.com') {
    return children;
  } else {
    return <LoginForm />;
  }
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* User App Routes */}
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/login"
          element={
            <UserLayout>
              <LoginForm />
            </UserLayout>
          }
        />
        <Route
          path="/register"
          element={
            <UserLayout>
              <RegistrationForm />
            </UserLayout>
          }
        />

        {/* Admin Portal Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-hotel"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AddHotel />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
