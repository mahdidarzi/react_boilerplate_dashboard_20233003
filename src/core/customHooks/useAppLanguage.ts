import { useEffect } from 'react';
import { ArabicKeys } from '../locales/ar';
import { EnglishKeys } from '../locales/en';
import { ReactIntlErrorCode } from 'react-intl';
// import { changeLanguage } from 'shared/layout/dashboard/redux/actions/mainAction';
// import { useAppDispatch, useAppSelector } from 'core/store/hooks';

export const useAppLanguage = () => {
  // const dispatch = useAppDispatch();
  const currentLanguage = 'en';
  // const currentLanguage = useAppSelector((state) => state.main.currentLanguage);

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
    if (currentLanguage === 'en') {
      document.body.classList.remove('ltr');
      document.body.classList.add('rtl');
      document.body.dir = 'rtl';
    } else {
      document.body.classList.remove('rtl');
      document.body.classList.add('ltr');
      document.body.dir = 'ltr';
    }
  }, [currentLanguage]);

  if (typeof window !== 'undefined') {
    const currentLanguageLocal = localStorage.getItem('currentLanguage')!;
    if (!currentLanguageLocal) {
      localStorage.setItem('currentLanguage', 'en');
    }
    // dispatch(changeLanguage(currentLanguageLocal));
  }

  return {
    currentLanguage,
    translations: messages[currentLanguage as keyof typeof messages],
    onTranslationError: onError,
  };
};


