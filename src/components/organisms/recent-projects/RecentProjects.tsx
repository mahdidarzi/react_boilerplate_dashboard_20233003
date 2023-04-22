import { ProjectCard } from 'components/molecules/project-card';
import React, { FunctionComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Styles from './RecentProjects.module.scss';
const data = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export const RecentProjects: FunctionComponent = () => {
  return (
    <Row>
      <Col xs={12}>
        <h6 className={Styles.title}>
          <FormattedMessage id="projects" />
        </h6>
      </Col>
      <Col xs={12}>
        <p className={Styles.des}>
          <FormattedMessage id="projects.description" />
        </p>
      </Col>
      {data.map((item, index) => (
        <Col key={index} md={3} xs={1}>
          <ProjectCard {...item} />
        </Col>
      ))}
    </Row>
  );
};
