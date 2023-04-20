import { useEffect } from 'react';
import { ReactIntlErrorCode } from 'react-intl';

import { ArabicKeys } from 'core/locales/ar';
import { EnglishKeys } from 'core/locales/en';


export const useAppLanguage = () => {
  const currentLanguage = 'en';

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

  // useEffect(() => {
  //   if (currentLanguage === 'ar') {
  //     document.body.classList.remove('ltr');
  //     document.body.classList.add('rtl');
  //     document.body.dir = 'rtl';
  //   } else {
  //     document.body.classList.remove('rtl');
  //     document.body.classList.add('ltr');
  //     document.body.dir = 'ltr';
  //   }
  // }, [currentLanguage]);

  if (typeof window !== 'undefined') {
    const currentLanguageLocal = localStorage.getItem('currentLanguage')!;
    if (!currentLanguageLocal) {
      localStorage.setItem('currentLanguage', 'en');
    }
    
  }

  return {
    currentLanguage,
    translations: messages[currentLanguage as keyof typeof messages],
    onTranslationError: onError,
  };
};


