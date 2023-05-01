import React, { FunctionComponent } from 'react';
import Styles from './OrdersOverview.module.scss';
import { Icon } from 'components/atoms';
import { FormattedMessage } from 'react-intl';

const data = [
  {
    icon: 'notifications',
    title: '$2400, Design changes',
    date: '22 DEC 7:20 PM',
    color: 'rgb(76, 175, 80)',
  },
  {
    icon: 'inventory_2',
    title: 'New order #1832412',
    date: '22 DEC 7:20 PM',
    color: 'rgb(244, 67, 53)',
  },
  {
    icon: 'shopping_cart',
    title: 'Server payments for April',
    date: '22 DEC 7:20 PM',
    color: 'rgb(26, 115, 232)',
  },
  {
    icon: 'payment',
    title: 'Server payments for April',
    date: '22 DEC 7:20 PM',
    color: 'rgb(251, 140, 0)',
  },
  {
    icon: 'vpn_key',
    title: 'New card added for order #4395133',
    date: '22 DEC 7:20 PM',
    color: 'rgb(233, 30, 99)',
  },
];

export const OrdersOverview: FunctionComponent = () => {
  return (
    <div className={Styles.base}>
      <div className="d-flex flex-column">
        <h4 className={Styles.title}>
          <FormattedMessage id="orders_overview" />
        </h4>
        <div className={Styles.subtitle}>
          <Icon icon={'arrow_upward'} />
          <p>
            <b>24%</b> this month
          </p>
        </div>
      </div>
      <div className={Styles.container}>
        {data.map((item, index) => (
          <div className={Styles.item} key={index}>
            <div>
              <Icon icon={item.icon} className={Styles.icon} style={{ background: item.color }} />
            </div>
            <div className={Styles.itemTitleContainer}>
              <p className={Styles.itemTitle}>{item.title}</p>
              <p className={Styles.itemDate}>{item.date}</p>
              <div className={Styles.devider} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
