import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarSubItem } from './SidebarSubItem';

export default {
  title: 'Molecules/SidebarSubItem',
  component: SidebarSubItem,
} as ComponentMeta<typeof SidebarSubItem>;

const TemplateWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ width: '235px' }}>{children}</div>
);

const Template: ComponentStory<typeof SidebarSubItem> = (args, { globals: { locale } }) => {
  const isRTL = false;
  return (
    <TemplateWrapper>
      <SidebarSubItem {...args} isRightToLeft={isRTL} />
    </TemplateWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Accounting Reports',
  isActive: false,
  hasMenu: true,
};
