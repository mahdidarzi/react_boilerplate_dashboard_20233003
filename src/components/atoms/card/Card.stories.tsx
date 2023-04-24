import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Atoms/Card',
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => {
  return (
    <Card {...args}>
      <h4>This is a Title</h4>
      <p>
        Sea lorem ut sea nonumy ipsum lorem, accusam lorem no dolor gubergren ipsum duo amet. Et lorem sadipscing
        takimata amet.
      </p>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {
  overlay: false,
};
