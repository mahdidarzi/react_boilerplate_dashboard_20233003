import { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

export const Content = ({ title }: { title: string }) => {
  return <>ContentContent: {title}</>;
};
export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard_route_1" element={<Content title="DashboardRoutes1" />} />
      <Route path="/dashboard_route_1" element={<Content title="DashboardRoutes2" />} />
      <Route path="*" element={<Content title="404" />} />
    </Routes>
  );
};

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <p>{`<Spinner />`}</p>
          </div>
        }
      >
        <br />
        <h3>Protected Routes</h3>
        <br />
        <p>{` <AccountingContainer />`}</p>
        <Outlet />
      </Suspense>
    </div>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [{ path: '/app/dashboard', element: <DashboardRoutes /> }],
  },
];
