import React, { useState } from 'react';
import classNames from 'classnames';
import Collapse from 'react-bootstrap/Collapse';

import styles from './sidebar-dropdown.module.scss';
import { Icon } from 'components/atoms';

interface SidebarDropdownProps {
  icon?: string;
  isActive?: boolean;
  isOpenByDefault?: boolean;
  menuItems?: React.ReactNode[];
}

export const SidebarDropdown: React.FC<React.PropsWithChildren<SidebarDropdownProps>> = ({
  icon,
  isActive,
  isOpenByDefault,
  menuItems,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const containerClasses = classNames(`${styles.base}`, {
    [styles.base_menu_open]: isOpen,
  });

  const itemClasses = classNames(`${styles.menu_toggle_item} d-flex flex-wrap align-items-center`, {
    [styles.menu_toggle_item_active]: isActive,
  });

  const menuIndicatorClasses = classNames(styles.menu_indicator_icon, {
    // Custom global class
    'rotate--180': isOpen,
  });

  return (
    <div className={containerClasses}>
      <button className={`${itemClasses} button--striped`} onClick={() => setIsOpen(!isOpen)}>
        <div className={`${styles.item_icon_container} d-flex align-items-center justify-content-center`}>
          {icon && <Icon icon={icon} className={styles.item_icon} />}
        </div>

        <div className={`${styles.text_container} d-flex align-items-center justify-content-between`}>
          <p>{children}</p>
          <Icon icon="arrow-down" className={menuIndicatorClasses} />
        </div>
      </button>
      {menuItems != null && (
        <Collapse in={isOpen}>
          <div>{menuItems}</div>
        </Collapse>
      )}
    </div>
  );
};
