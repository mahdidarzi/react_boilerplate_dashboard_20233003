import { useRoutes } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { protectedRoutes } from 'routes/protected';
import { publicRoutes } from 'routes/public';
import { ProjectCard } from 'components/molecules/project-card';
import { Profile } from 'pages/login/profile';

export const AppRoutes = () => {
  const auth = { user: false };

  const commonRoutes = [
    {
      path: '/*',
      element: <Profile />,
    },
  ];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
