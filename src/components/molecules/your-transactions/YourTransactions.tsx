import React, { FunctionComponent } from 'react';
import Styles from './YourTransactions.module.scss';
import { Icon, InvoiceTransactionItem } from 'components/atoms';
import { FormattedMessage } from 'react-intl';

interface Props {
  name?: string;
}

/* 

Netflix
27 March 2020, at 12:30 PM
- $ 2,500

*/

const data = [
  {
    title: 'Netflix',
    date: '27 March 2020, at 12:30 PM',
    amount: -2500,
    status: 'paid',
  },
  {
    title: 'Apple',
    date: '27 March 2020, at 12:30 PM',
    amount: 2500,
    status: 'paid',
  },
  {
    title: 'HubSpot',
    date: '27 March 2020, at 12:30 PM',
    amount: 2500,
    status: 'pending',
  },
];

export const YourTransactions: FunctionComponent<Props> = () => {
  return (
    <div className={Styles.base}>
      <div className={Styles.header}>
        <p className={Styles.title}>
          <FormattedMessage id={'your_transactions'} />
        </p>
        <div className="d-flex">
          <Icon icon="date_range" className={Styles.calendarIcon} />
          <p className={Styles.calendarDate}>23 - 30 March 2020</p>
        </div>
      </div>
      <div>
        {data.map((item, index) => {
          return <InvoiceTransactionItem key={'InvoiceTransactionItem' + index} {...item} />;
        })}
      </div>
    </div>
  );
};
