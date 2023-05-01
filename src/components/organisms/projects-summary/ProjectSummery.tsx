import React, { FunctionComponent } from 'react';
import Styles from './ProjectSummery.module.scss';
import { FormattedMessage } from 'react-intl';
import { Icon, ProfileImage, ProgressBar } from 'components/atoms';
import { KebabMenu } from 'components/molecules';
import { Col, Row } from 'react-bootstrap';

const data = [
  {
    image:
      'https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg',
    name: 'Material UI XD Version',
    budget: '$14,000',
    completion: 70,
    members: [
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    ],
  },
  {
    image:
      'https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg',
    name: 'Material UI XD Version',
    budget: '$14,000',
    completion: 70,
    members: [
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    ],
  },
  {
    image:
      'https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg',
    name: 'Material UI XD Version',
    budget: '$14,000',
    completion: 70,
    members: [
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    ],
  },
  {
    image:
      'https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg',
    name: 'Material UI XD Version',
    budget: '$14,000',
    completion: 70,
    members: [
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    ],
  },
  {
    image:
      'https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg',
    name: 'Material UI XD Version',
    budget: '$14,000',
    completion: 70,
    members: [
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
      'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    ],
  },
];

export const ProjectSummery: FunctionComponent = () => {
  return (
    <div className={Styles.base}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <h4 className={Styles.title}>
            <FormattedMessage id="projects" />
          </h4>
          <div className={Styles.subtitle}>
            <Icon icon={'done'} />
            <p>
              <b>30 done</b> this month
            </p>
          </div>
        </div>
        <div>
          <KebabMenu />
        </div>
      </div>
      <Row>
        <Col xs={6}>
          <p className={Styles.tableHeader}>
            <FormattedMessage id="COMPANIES" />
          </p>
        </Col>
        <Col xs={2}>
          <p className={Styles.tableHeader}>
            <FormattedMessage id="MEMBERS" />
          </p>
        </Col>
        <Col xs={2}>
          <p className={Styles.tableHeader}>
            <FormattedMessage id="BUDGET" />
          </p>
        </Col>
        <Col xs={2}>
          <p className={Styles.tableHeader}>
            <FormattedMessage id="COMPLETION" />
          </p>
        </Col>
      </Row>
      {data.map((item, index) => (
        <Row key={index} className={Styles.item}>
          <Col xs={6}>
            <div className="d-flex align-items-center">
              <img src={item.image} width={48} />
              <p className={Styles.itemName}>{item.name}</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className={Styles.people}>
              {item.members.map((i, indx) => (
                <ProfileImage key={'members-' + indx} src={i} small rounded />
              ))}
            </div>
          </Col>
          <Col xs={2}>
            <p className={Styles.itemBudget}>{item.budget}</p>
          </Col>
          <Col xs={2}>
            <ProgressBar progress={item.completion} />
          </Col>
        </Row>
      ))}
    </div>
  );
};
