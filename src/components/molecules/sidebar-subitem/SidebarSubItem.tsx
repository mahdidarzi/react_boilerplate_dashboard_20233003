import React from 'react';
import classNames from 'classnames';
import styles from './sidebar-subitem.module.scss';
import { Icon } from 'components/atoms';

interface SidebarSubItemProps {
  isActive?: boolean;
  hasMenu?: boolean;
  isRightToLeft?: boolean;
}

export const SidebarSubItem: React.FC<React.PropsWithChildren<SidebarSubItemProps>> = ({
  isActive,
  hasMenu,
  isRightToLeft,
  children,
}) => {
  const itemClasses = classNames(`${styles.base} d-flex flex-wrap align-items-center`, {
    [styles.base_active]: isActive,
  });

  const iconClasses = classNames(styles.menu_indicator_icon, {
    // Bootstrap class
    'd-none': !hasMenu,

    // Custom global class
    'rotate--180': isRightToLeft,
  });

  const sideLineClasses = classNames(`${styles.side_line_container} justify-content-end`, {
    [styles.side_line_container_active]: isActive,
  });

  return (
    <div className={itemClasses}>
      <div className={styles.item_icon_placeholder} />

      <div className={`${styles.text_container} d-flex align-items-center justify-content-between`}>
        <p>{children}</p>
        <Icon icon="arrow-right" className={iconClasses} />
      </div>

      <div className={sideLineClasses}>
        <div />
      </div>
    </div>
  );
};
