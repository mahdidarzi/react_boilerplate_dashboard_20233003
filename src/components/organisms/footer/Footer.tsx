import React from 'react';
import { Icon } from 'components/atoms';
import styles from './Footer.module.scss';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

interface authenticationLayoutProps {
  children?: React.ReactNode;
  light?: boolean;
}

export const Footer: React.FC<authenticationLayoutProps> = ({ light }) => {
  const intl = useIntl();

  const classes = classNames(styles.base, {
    [styles.light]: light,
  });

  return (
    <div className={classes}>
      <div className={styles.copyright}>
        © 2023, made with
        <div>
          <Icon icon="favorite" />
        </div>
        by
        <a href="https://www.linchpin-gp.com/" target="_blank" rel="noreferrer">
          Linchpin
        </a>
      </div>
      <ul>
        <li>
          <a href="/aboutus">{intl.formatMessage({ id: 'aboutus' })}</a>
        </li>
        <li>
          <a href="/contactus">{intl.formatMessage({ id: 'blog' })}</a>
        </li>
        <li>
          <a href="/licence">{intl.formatMessage({ id: 'licence' })}</a>
        </li>
      </ul>
    </div>
  );
};
