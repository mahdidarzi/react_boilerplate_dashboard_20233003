import { AuthorsTable, DashboardLayout, ProjectsTable } from 'components/organisms';
import React, { FunctionComponent } from 'react';
import { Row, Col } from 'react-bootstrap';

export const Table: FunctionComponent = () => {
  return (
    <DashboardLayout>
      <Row className="mt-3 gy-3">
        <Col md={12}>
          <AuthorsTable />
        </Col>
        <Col md={12}>
          <ProjectsTable />
        </Col>
      </Row>
    </DashboardLayout>
  );
};
