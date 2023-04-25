import React from 'react';
import styles from './LoginLayout.module.scss';
import { Footer, Header } from 'components/organisms';
interface authenticationLayoutProps {
  children: React.ReactNode;
}

export const LoginLayout: React.FC<authenticationLayoutProps> = ({ children }) => {
  return (
    <div className={styles.base}>
      <Header />
      {children}
      <Footer light />
    </div>
  );
};
