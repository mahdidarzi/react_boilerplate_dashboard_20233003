import { Route, Routes } from 'react-router-dom';

import { AuthenticationLayout } from 'components/organisms';
import { Login } from 'pages/login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="register"
        element={
          <AuthenticationLayout>
            <Login />
          </AuthenticationLayout>
        }
      />
      <Route
        path="login"
        element={
          <AuthenticationLayout>
            <Login />
          </AuthenticationLayout>
        }
      />
      <Route
        path="*"
        element={
          <AuthenticationLayout>
            <Login />
          </AuthenticationLayout>
        }
      />
    </Routes>
  );
};
export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
