import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { IconButton } from './IconButton';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => {
  return <IconButton {...args}> This is a text</IconButton>;
};

export const Default = Template.bind({});
Default.args = {
  icon: 'notifications',
};
