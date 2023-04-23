import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LanguageChanger,ThemChanger } from 'components/atoms';
import { changeLanguageAction, changeThemAction } from 'core/redux/globalSlice';
import { RootState } from 'core/redux/store';

import styles from './authenticationLayout.styles.module.scss';

interface authenticationLayoutProps {
  children: React.ReactNode;
}

export const AuthenticationLayout: React.FC<authenticationLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const CURRENT_LANGUAGE = useSelector((state: RootState) => state.globalReducer.language);
  const CURRENT_THEM = useSelector((state: RootState) => state.globalReducer.them);
  const changeLanguage = (key: 'arabic'|'english') =>()=> {
    dispatch(changeLanguageAction(key));
  };
  const changeThem = (key: 'light'|'dark') =>()=> {
    dispatch(changeThemAction(key));
  };
  return (
    <div className={styles.base}>
      <LanguageChanger currentLanguage={CURRENT_LANGUAGE} onChange={changeLanguage} />
      <ThemChanger currentThem={CURRENT_THEM} onChange={changeThem} />
      {children}
    </div>
  );
};
