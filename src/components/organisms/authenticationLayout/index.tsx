import React from 'react';

import styles from './authenticationLayout.styles.module.scss';

interface authenticationLayoutProps {
  children: React.ReactNode;
}

export const AuthenticationLayout: React.FC<authenticationLayoutProps> = ({ children }) => {
  return <div className={styles.base}>{children}</div>;
};
