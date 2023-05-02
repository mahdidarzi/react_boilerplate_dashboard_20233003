import React, { FunctionComponent } from 'react';
import Styles from './IncomeInfoCard.module.scss';
import { Icon } from '../icon';

interface Props {
  icon?: string;
  title?: string;
  subtitle?: string;
  income?: string;
}

export const IncomeInfoCard: FunctionComponent<Props> = ({
  icon = 'account_balance',
  income = '+$2000',
  subtitle = 'Belong Interactive',
  title = 'Salary',
}) => {
  return (
    <div className={Styles.base}>
      <div className={Styles.header}>
        <Icon className={Styles.icon} icon={icon} />
      </div>
      <div className={Styles.content}>
        <h6 className={Styles.title}>{title}</h6>
        <span className={Styles.subtitle}>{subtitle}</span>
        <hr className={Styles.devider} />
        <h5 className={Styles.income}>{income}</h5>
      </div>
    </div>
  );
};
