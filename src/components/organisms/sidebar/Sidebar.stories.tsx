import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

// import { useAppDirection } from 'core/customHooks/useAppDirection';

import { SidebarWrapper } from './Sidebar';
import { SidebarItem } from './types';

export default {
  title: 'Organisms/Sidebar',
  component: SidebarWrapper,
  parameters: {
    backgrounds: {
      default: 'light_surface',
    },
  },
} as ComponentMeta<typeof SidebarWrapper>;

const dummyData: SidebarItem[] = [
  {
    icon: 'dashboard',
    title: 'dashboard',
    route: '/dashboard',
  },
  {
    icon: 'settings',
    title: 'settings',
    route: '/settings',
    children: [
      { title: 'branch management', route: 'settings/branch_management' },
      {
        title: 'items',
        route: '/settings/items',
        children: [
          {
            title: 'units',
            route: 'settings/items/units',
          },
        ],
      },
      { title: 'user management', route: 'settings/user_management' },
    ],
  },
  {
    icon: 'accounting',
    title: 'accounting',
    route: '/accounting',
  },
  {
    icon: 'inventory',
    title: 'inventory',
    route: '/inventory',
  },
];

const Template: ComponentStory<typeof SidebarWrapper> = (args, { globals: { locale } }) => {
  // const { isRTL } = useAppDirection(locale);
  return <SidebarWrapper {...args} isRightToLeft={false} />;
};

export const Default = Template.bind({});
Default.args = {
  items: dummyData,
  activeRoute: '/settings/items/units',
};
