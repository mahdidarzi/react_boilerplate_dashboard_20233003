import { useRoutes } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const auth = { user: false };

  const commonRoutes = [
    {
      path: '/*',
      element: (
        <p>
          <FormattedMessage id="login.welcome.message" />
        </p>
      ),
    },
  ];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
