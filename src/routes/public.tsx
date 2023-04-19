import { Route, Routes } from 'react-router-dom';

//
export const Content = () => {
  return <div>ContentContent:</div>;
};

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Content />} />
      <Route path="login" element={<Content />} />
      <Route path="*" element={<Content />} />
    </Routes>
  );
};
export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
