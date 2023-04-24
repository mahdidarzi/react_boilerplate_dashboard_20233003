import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import { default as Component } from './ProjectCard';

export default {
  title: 'Molecules/ProjectCard',
  component: Component,
} as Meta<typeof Component>;

const Template: StoryFn<typeof Component> = (args) => {
  return <Component {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  image: 'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
  caption: 'Project #2',
  title: 'Modern',
  description: 'As Uber works through a huge amount of internal management turmoil.',
  people: [
    {
      name: 'John Doe',
      src: 'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    },
    {
      name: 'John Doe',
      src: 'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    },
    {
      name: 'John Doe',
      src: 'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    },
    {
      name: 'John Doe',
      src: 'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    },
  ],
};
