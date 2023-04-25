import React from 'react';
import styles from './SignupLayout.module.scss';
import { Footer, Header } from 'components/organisms';

interface authenticationLayoutProps {
  children: React.ReactNode;
}

export const SignupLayout: React.FC<authenticationLayoutProps> = ({ children }) => {
  return (
    <div className={styles.base}>
      <Header transparent />
      <div className={styles.headerBg} />
      {children}
      <Footer />
    </div>
  );
};
