import React, { FunctionComponent } from 'react';
import Styles from './CreditCard.module.scss';
import { Icon } from '../icon';
import { FormattedMessage } from 'react-intl';

export const CreditCard: FunctionComponent = () => {
  return (
    <div className={Styles.base}>
      <div className={Styles.cardBg} />
      <Icon icon="wifi" className={Styles.icon} />
      <p className={Styles.number}>4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</p>
      <div className={Styles.footer}>
        <div className={Styles.info}>
          <div className={Styles.infoItem}>
            <span className={Styles.infoTitle}>
              <FormattedMessage id={'card_holder'} />
            </span>
            <h6 className={Styles.infoDes}>jack peterson</h6>
          </div>
          <div className={Styles.infoItem}>
            <span className={Styles.infoTitle}>
              <FormattedMessage id={'expires'} />
            </span>
            <h6 className={Styles.infoDes}>11/22</h6>
          </div>
        </div>
        <div className={Styles.mastercard}>
          <img
            src="https://demos.creative-tim.com/material-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png"
            alt="master card"
          />
        </div>
      </div>
    </div>
  );
};
