import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { Icon } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => {
  return <Icon {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: '',
  icon: 'face',
};
