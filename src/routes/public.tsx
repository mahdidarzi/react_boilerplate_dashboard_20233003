import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/login';
import { Signup } from 'pages/signup';
import { Profile } from 'pages/profile';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};
export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
  {
    path: '/dashboard/*',
    element: <DashboardRoutes />,
  },
];
