import React from 'react';

import { SidebarSubItem } from 'components/molecules/sidebar-subitem';
// import { TooltipMenu, TooltipMenuItem } from 'components/molecules';

import { SidebarItem } from '../types';

interface SubItemMenuProps {
  item: SidebarItem;
  activeRoute?: string;
  isRightToLeft?: boolean;
}

export const SubItemMenu: React.FC<SubItemMenuProps> = ({ item, activeRoute = '', isRightToLeft }) => {
  const renderTooltipMenu = (item: SidebarItem, activeRoute: string) => {
    if (item.children != null)
      return (
        <div>
          <button className="button--striped">
            <div>{item.title}</div>
          </button>
        </div>
      );
    return (
      <a key={item.title} href={item.route ? item.route : '/'}>
        <div>{item.title}</div>
      </a>
    );
  };

  return (
    <div>
      <button className="button--striped w-100">
        <SidebarSubItem hasMenu isActive={activeRoute.includes(item.route)} isRightToLeft={isRightToLeft}>
          {item?.title}
        </SidebarSubItem>
      </button>
    </div>
  );
};
