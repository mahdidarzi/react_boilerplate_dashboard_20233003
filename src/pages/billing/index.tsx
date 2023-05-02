import React, { FunctionComponent } from 'react';
import { DashboardLayout, AuthorsTable, ProjectsTable } from 'components/organisms';
import { Row, Col } from 'react-bootstrap';
import { CreditCard, IncomeInfoCard } from 'components/atoms';
import { BillingInfo, Invoces, PaymentMethod } from 'components/molecules';
import { YourTransactions } from 'components/molecules/your-transactions';

export const Billing: FunctionComponent = () => {
  return (
    <DashboardLayout>
      <Row className="mt-md-3 gy-3">
        <Col md={8}>
          <Row className="gy-3">
            <Col md={6}>
              <CreditCard />
            </Col>
            <Col>
              <IncomeInfoCard />
            </Col>
            <Col>
              <IncomeInfoCard />
            </Col>
          </Row>
          <Row>
            <Col>
              <PaymentMethod />
            </Col>
          </Row>
        </Col>
        <Col>
          <Invoces />
        </Col>
      </Row>
      <Row className="mt-3 gy-3">
        <Col md={7}>
          <BillingInfo />
        </Col>
        <Col>
          <YourTransactions />
        </Col>
      </Row>
    </DashboardLayout>
  );
};
