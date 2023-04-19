import { EnglishKeys } from './en';

export type ITranslationKeys = keyof typeof EnglishKeys;
export type ITranslation = {
  [x in ITranslationKeys]: string;
};
export type ILanguage = {
    [x in 'en' | 'ar']: ITranslation;
};
