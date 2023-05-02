import React, { FunctionComponent } from 'react';
import Styles from './invoiceTransactionItem.module.scss';
import { Icon } from '../icon';
import classNames from 'classnames';

interface Props {
  title?: string;
  date?: string;
  amount: number;
  status: string;
}

export const InvoiceTransactionItem: FunctionComponent<Props> = ({ title, date, amount, status }) => {
  const isNegative = amount < 0;
  const icon = status === 'pending' ? 'priority_high' : !isNegative ? 'expand_less' : 'expand_more';

  const iconClasses = classNames(Styles.icon, {
    [Styles.iconRed]: isNegative,
    [Styles.iconGreen]: !isNegative,
    [Styles.iconPending]: status === 'pending',
  });

  const priceClasses = classNames(Styles.price, {
    [Styles.priceRed]: isNegative,
    [Styles.priceGreen]: !isNegative,
    [Styles.pricePending]: status === 'pending',
  });

  console.log({ isNegative });

  return (
    <div className={Styles.base}>
      <Icon icon={icon} className={iconClasses} />
      <div className={Styles.container}></div>
      <div className={'flex-grow-1'}>
        <p className={Styles.title}>{title}</p>
        <p className={Styles.date}>{date}</p>
      </div>
      <p className={priceClasses}>{`${isNegative ? '- ' : '+ '}$ ${amount.toString().replace('-', '')}`}</p>
    </div>
  );
};
