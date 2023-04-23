import { useEffect } from 'react';
import { ReactIntlErrorCode } from 'react-intl';

import { ArabicKeys } from 'core/locales/ar';
import { EnglishKeys } from 'core/locales/en';
import { RootState } from 'core/redux/store';
import { useSelector } from 'react-redux';


export const useAppLanguage = () => {
  const CURRENT_LANGUAGE = useSelector((state: RootState) => state.globalReducer.language);

  const messages: any = {
    en: EnglishKeys, // English translations
    ar: ArabicKeys, // Arabic translations
  };

  const onError = (e: { code: string }) => {
    if (e.code === ReactIntlErrorCode.MISSING_DATA) {
      return;
    }
    console.error(e);
  };

  useEffect(() => {
    if (CURRENT_LANGUAGE === 'arabic') {
      document.body.classList.remove('ltr');
      document.body.classList.add('rtl');
      document.body.dir = 'rtl';
    } else {
      document.body.classList.remove('rtl');
      document.body.classList.add('ltr');
      document.body.dir = 'ltr';
    }
  }, [CURRENT_LANGUAGE]);

  if (typeof window !== 'undefined') {
    const CURRENT_LANGUAGELocal = localStorage.getItem('CURRENT_LANGUAGE')!;
    if (!CURRENT_LANGUAGELocal) {
      localStorage.setItem('CURRENT_LANGUAGE', 'en');
    }
    
  }

  return {
    CURRENT_LANGUAGE,
    translations: messages[CURRENT_LANGUAGE as keyof typeof messages],
    onTranslationError: onError,
  };
};


