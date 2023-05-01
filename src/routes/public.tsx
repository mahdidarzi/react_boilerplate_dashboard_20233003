import { Route, Routes } from 'react-router-dom';
import { Profile, Signup, Login, Dashboard, Table } from 'pages';

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
      <Route path="*" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="tables" element={<Table />} />
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
