import classnames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper } from 'components/atoms';

import styles from './LanguageChanger.styles.module.scss';

interface LanguageChangerProps {
  className?: string;
  currentLanguage: 'arabic' | 'english';
  onChange: (key: 'arabic' | 'english') => void;
}

export const LanguageChanger: React.FC<LanguageChangerProps> = ({ className = '',onChange,currentLanguage='english' }) => {
  const LANGUAGES = [
    {
      title: 'عربي ',
      alphabet: 'ع',
      key: 'arabic',
      imag: '/assets/images/general/ar.png',
    },
    {
      title: 'English ',
      alphabet: 'En',
      key: 'english',
      imag: '/assets/images/general/en.png',
    },
  ];
  const CURRENT_LANGUAGE = LANGUAGES[currentLanguage!== 'arabic' ? 0 : 1];
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <div className={styles.base} onClick={onChange(CURRENT_LANGUAGE.key)}>
      <p>{CURRENT_LANGUAGE.title}</p>
      <img className={styles.flag} src={CURRENT_LANGUAGE.imag} />
    </div>
  );
};
