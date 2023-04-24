import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, LanguageChanger, ThemChanger } from 'components/atoms';
import { changeLanguageAction, changeThemAction } from 'core/redux/globalSlice';
import { RootState } from 'core/redux/store';

import styles from './Header.module.scss';
import { IconButton } from 'components/molecules';

interface authenticationLayoutProps {
  children?: React.ReactNode;
}

export const Header: React.FC<authenticationLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState(false);

  const CURRENT_LANGUAGE = useSelector((state: RootState) => state.globalReducer.language);
  const changeLanguage = (key: 'arabic' | 'english') => () => {
    dispatch(changeLanguageAction(key));
  };

  useEffect(() => {
    if (document) {
      const dark = document.documentElement.classList.contains('theme-dark');
      setIsDark(dark);
    }
  }, []);

  const changeThem = (key: string) => {
    setIsDark(key === 'dark');
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${key}`);
  };
  return (
    <div className={styles.base}>
      <h6 className={styles.title}>Sample Dashboard</h6>
      <div className="d-flex flex-row align-items-center">
        <LanguageChanger currentLanguage={CURRENT_LANGUAGE} onChange={changeLanguage} />
        <IconButton
          className={styles.themeButton}
          onClick={() => changeThem(isDark ? 'light' : 'dark')}
          icon={isDark ? 'sunny' : 'nightlight'}
        />
        {children}
      </div>
    </div>
  );
};
