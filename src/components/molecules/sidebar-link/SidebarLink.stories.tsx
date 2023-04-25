import React, { PropsWithChildren } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarLink } from './SidebarLink';

export default {
  title: 'Molecules/SidebarLink',
  component: SidebarLink,
} as ComponentMeta<typeof SidebarLink>;

export const TemplateWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ width: '235px' }}>{children}</div>
);

const Template: ComponentStory<typeof SidebarLink> = (args) => (
  <TemplateWrapper>
    <SidebarLink {...args} />
  </TemplateWrapper>
);

export const Default = Template.bind({});
Default.args = {
  isActive: false,
  children: 'Accounts Chart',
  icon: 'error',
};
