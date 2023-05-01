import React, { FunctionComponent } from 'react';
import Styles from './Dashboard.module.scss';
import { DashboardLayout } from 'components/organisms';
import { Col, Row } from 'react-bootstrap';
import { IconCard, ChartCard } from 'components/molecules';

export const Dashboard: FunctionComponent = () => {
  return (
    <DashboardLayout>
      <Row>
        <Col md={3}>
          <IconCard />
        </Col>
        <Col md={3}>
          <IconCard />
        </Col>
        <Col md={3}>
          <IconCard />
        </Col>
        <Col md={3}>
          <IconCard />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <ChartCard />
        </Col>
        <Col xs={4}>
          <ChartCard />
        </Col>
        <Col xs={4}>
          <ChartCard />
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <ChartCard />
        </Col>
        <Col xs={4}>
          <ChartCard />
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default Dashboard;
