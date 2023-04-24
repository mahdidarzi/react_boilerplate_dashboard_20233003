import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { default as Component } from './ProfileImage';

export default {
  title: 'Atoms/ProfileImage',
  component: Component,
} as Meta<typeof Component>;

const Template: StoryFn<typeof Component> = (args) => {
  return <Component {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: '',
  medium: true,
  src: 'https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg?__cf_chl_tk=rZet47sfNPZxvg_92bUMM6VEygf0C_D8FWnhR1FkK7w-1682165041-0-gaNycGzNDRA',
};
