import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from 'routes/protected';
import { publicRoutes } from 'routes/public';
import { Profile } from 'pages/profile';
import { Login } from 'pages/login';

export const AppRoutes = () => {
  const auth = { user: false };

  const commonRoutes = [
    {
      path: '/*',
      element: <Login />,
    },
  ];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
