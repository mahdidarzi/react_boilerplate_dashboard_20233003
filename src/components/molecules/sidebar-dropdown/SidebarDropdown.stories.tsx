import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarDropdown } from './SidebarDropdown';
import { SidebarSubItem } from 'components/molecules/sidebar-subitem';

export default {
  title: 'Molecules/SidebarDropdown',
  component: SidebarDropdown,
} as ComponentMeta<typeof SidebarDropdown>;

const TemplateWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ width: '235px' }}>{children}</div>
);

const Template: ComponentStory<typeof SidebarDropdown> = (args) => (
  <TemplateWrapper>
    <SidebarDropdown {...args} />
  </TemplateWrapper>
);

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    /*     <SidebarSubItem isActive hasMenu>
      Accounting Reports
    </SidebarSubItem>,
    <SidebarSubItem hasMenu>Company Information</SidebarSubItem>,
    <SidebarSubItem>Payment Cash</SidebarSubItem>,*/
  ],
  isActive: false,
  isOpenByDefault: true,
  children: 'Dashboard',
  icon: 'error',
};
