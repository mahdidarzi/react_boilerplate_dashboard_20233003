import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from './CheckBox';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  return <CheckBox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: '',
  isDisabled: false,
  onClick: () => {},
  isChecked: true,
};
