import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { HeroImage } from './HeroImage';

export default {
  title: 'Atoms/HeroImage',
  component: HeroImage,
} as Meta<typeof HeroImage>;

const Template: StoryFn<typeof HeroImage> = (args) => {
  return <HeroImage {...args} />;
};

export const Default = Template.bind({});
