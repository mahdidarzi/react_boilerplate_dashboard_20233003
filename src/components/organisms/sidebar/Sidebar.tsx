import React from 'react';
import classNames from 'classnames';

import { SidebarDropdown, SidebarLink, SidebarSubItem } from 'components/molecules';

import logoImage from './assets/logo.png';
import styles from './sidebar.module.scss';
import { SubItemMenu } from './components/SubItemMenu';
import type { SidebarItem } from './types';
import { Icon } from 'components/atoms';

interface SidebarProps {
  items?: SidebarItem[];
  activeRoute?: string;
  isRightToLeft?: boolean;
}

export const SidebarWrapper: React.FC<React.PropsWithChildren<SidebarProps>> = ({
  items = [],
  activeRoute = '',
  isRightToLeft,
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const classes = classNames(styles.base, { [styles.sidebarOpen]: !isOpen });
  const wrapperClasses = classNames(styles.wrapper, { [styles.wrapperOpen]: !isOpen });
  const containerClasses = classNames(styles.container, { [styles.containerOpen]: !isOpen });

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className={wrapperClasses}>
      <nav className={classes}>
        <Icon icon={'arrow_back'} className={styles.back} onClick={handleClose} />
        <div className={styles.top_section}>
          <img src={`${logoImage}`} />
        </div>
        <ul className="d-flex flex-column nav p-0 m-0">
          {items.map((item) => {
            if (item.children != null) {
              return (
                <li key={item.title}>
                  <SidebarDropdown
                    icon={item.icon}
                    isActive={activeRoute === item.route}
                    menuItems={item.children.map((subitem) => {
                      if (subitem.children != null)
                        return (
                          <SubItemMenu
                            key={subitem.title}
                            item={subitem}
                            activeRoute={activeRoute}
                            isRightToLeft={isRightToLeft}
                          />
                        );

                      return (
                        <a key={subitem.title} href={subitem.route ? subitem.route : '/'}>
                          <SidebarSubItem isActive={activeRoute === subitem.route}>{subitem.title}</SidebarSubItem>
                        </a>
                      );
                    })}
                  >
                    {item.title}
                  </SidebarDropdown>
                </li>
              );
            }

            return (
              <li key={item.title}>
                <a href={item.route ? item.route : '/'}>
                  <SidebarLink icon={item.icon} isActive={activeRoute === item.route}>
                    {item.title}
                  </SidebarLink>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={containerClasses}>{children}</div>
    </div>
  );
};
