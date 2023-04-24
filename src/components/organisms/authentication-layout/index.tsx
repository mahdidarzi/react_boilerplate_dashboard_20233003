import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, LanguageChanger, ThemChanger } from 'components/atoms';
import { changeLanguageAction, changeThemAction } from 'core/redux/globalSlice';
import { RootState } from 'core/redux/store';

import styles from './authenticationLayout.styles.module.scss';
import { Header } from '..';

interface authenticationLayoutProps {
  children: React.ReactNode;
}

export const AuthenticationLayout: React.FC<authenticationLayoutProps> = ({ children }) => {
  return (
    <div className={styles.base}>
      <Header></Header>
    </div>
  );
};
