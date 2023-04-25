import React from 'react';
import classNames from 'classnames';

import styles from './sidebar-link.module.scss';
import { Icon } from 'components/atoms';

interface SidebarLinkProps {
  icon?: string;
  isActive?: boolean;
}

export const SidebarLink: React.FC<React.PropsWithChildren<SidebarLinkProps>> = ({ icon, isActive, children }) => {
  const classes = classNames(`${styles.base} d-flex flex-wrap align-items-center`, {
    [styles.base_active]: isActive,
  });

  return (
    <div className={classes}>
      <div className={`${styles.item_icon_container} d-flex align-items-center justify-content-center`}>
        {icon && <Icon icon={icon} className={styles.item_icon} />}
      </div>
      <div className={styles.text_container}>
        <p>{children}</p>
      </div>
    </div>
  );
};
