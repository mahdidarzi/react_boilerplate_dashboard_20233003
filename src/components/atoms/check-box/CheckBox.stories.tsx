import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { CheckBox } from './CheckBox';

export default {
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args) => {
  return <CheckBox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: '',
  isDisabled: false,
};
