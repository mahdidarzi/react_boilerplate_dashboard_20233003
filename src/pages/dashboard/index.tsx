import React, { FunctionComponent } from 'react';
import Styles from './Dashboard.module.scss';
import { DashboardLayout, OrdersOverview, ProjectSummery } from 'components/organisms';
import { Col, Row } from 'react-bootstrap';
import { IconCard, BarChartCard, LineChartCard } from 'components/molecules';

export const Dashboard: FunctionComponent = () => {
  return (
    <DashboardLayout>
      <Row>
        <Col md={3}>
          <IconCard title={'Bookings'} value="281" percent="+55" icon="weekend" />
        </Col>
        <Col md={3}>
          <IconCard
            title={"Today's Users"}
            value="2,300"
            percent="+3"
            icon="leaderboard"
            color="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
          />
        </Col>
        <Col md={3}>
          <IconCard
            title={"Today's Users"}
            value="2,300"
            percent="+3"
            footerText="than last month"
            icon="store"
            color="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
          />
        </Col>
        <Col md={3}>
          <IconCard
            title={'Followers'}
            value="+91"
            footerText="Just updated"
            icon="person_add"
            color="linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <BarChartCard />
        </Col>
        <Col xs={4}>
          <LineChartCard
            color="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
            shadow="rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(76, 175, 79, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem"
            footerText="updated 4 min ago"
            title="Daily Sales"
            value="(+15%) increase in today sales."
          />
        </Col>
        <Col xs={4}>
          <LineChartCard
            color="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
            title="Completed Tasks"
            value="Last Campaign Performance"
            footerText="just updated"
            shadow="rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(64, 64, 64, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={8}>
          <ProjectSummery />
        </Col>
        <Col xs={4}>
          <OrdersOverview />
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default Dashboard;
