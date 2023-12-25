import { useEffect, useState,React } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

/** import all components */

import FspcStart from './components/screens/FspcStart/FspcStart'
import FspcSignup from './components/screens/FspcSignup/FspcSignup';
import Admin from './components/screens/Admin/Admin';
import Main  from './components/screens/Main/Main';
import Profile from './components/screens/Profile/Box.jsx';
import FspcLogin from './components/screens/FspcLogin/FspcLogin';
import Notification from './components/Notification/Notification.tsx';
import RegistrationPage from './components/screens/Registrations/registration.js';
import AdminLogin from './components/screens/Admin/AdminLogin.js';
import AdminPastpaper from './components/screens/Admin/AdminPastpaper.js'


/** auth middleware */
// import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import PastPapers from './components/PastPapers/pastpaper';

/** root routes */
export default function App() {
    const [notification, setNotification] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('access');

  useEffect(() => {
    const handleStorageEvent = () => {
      if (!token) {
        navigate('/');
        setNotification('Your session has expired. Please log in again.');
      }
    };
    window.addEventListener('storage', handleStorageEvent);
    return () => {
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, [navigate, token]);

  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<FspcStart />} />
        <Route path="/login" element={<FspcLogin />} />
        <Route path="/register" element={<FspcSignup />} />  
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* <Route path="/admin" element={<Admin />} />   */}
             


        {/* Protected routes. Only Authed users can access. */}
        {token && (
          <>
          <Route path="/home" element={<Main />} />
          <Route path="/pastpaper" element={<PastPapers />} />
          <Route path="/home" element={<Main />} />
          <Route path="/admin/home" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register-competition" element={<RegistrationPage />} />
          <Route path="/admin/pastpaper" element={<AdminPastpaper />} />
          </>
        )}

        {/* Catch non-existing routes. */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
      {notification && (
        <Notification message={notification} handleClose={() => setNotification('')} />
      )}
    </div>
  );
};
