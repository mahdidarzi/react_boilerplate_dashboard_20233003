import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { CardWrapper } from './Card';

export default {
  title: 'Atoms/Card',
  component: CardWrapper,
} as Meta<typeof CardWrapper>;

const Template: StoryFn<typeof CardWrapper> = (args) => {
  return (
    <CardWrapper {...args}>
      <h4>This is a Title</h4>
      <p>
        Sea lorem ut sea nonumy ipsum lorem, accusam lorem no dolor gubergren ipsum duo amet. Et lorem sadipscing
        takimata amet.
      </p>
    </CardWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  overlay: false,
};
