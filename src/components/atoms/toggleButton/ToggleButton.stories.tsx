import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleButton } from './ToggleButton';

export default {
  title: 'Atoms/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => {
  return <ToggleButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: '',
  disabled: false,
  onClick: () => {},
  active: true,
};
