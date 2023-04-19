import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { useAppLanguage } from '../core/customHooks/useAppLanguage';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { currentLanguage, translations, onTranslationError } = useAppLanguage();

 

  return (
    <React.Suspense
      fallback={<div className="flex items-center justify-center w-screen h-screen">{/* <Spinner size="xl" /> */}</div>}
    >
      <IntlProvider 
        messages={translations}
        locale={currentLanguage}
        defaultLocale={currentLanguage}
        onError={onTranslationError}
      >
      <Router>{children}</Router>
      </IntlProvider>
    </React.Suspense>
  );
};
