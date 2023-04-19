import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={<div className="flex items-center justify-center w-screen h-screen">{/* <Spinner size="xl" /> */}</div>}
    >
      <IntlProvider locale="en" defaultLocale="en">
      <Router>{children}</Router>
      </IntlProvider>
    </React.Suspense>
  );
};
