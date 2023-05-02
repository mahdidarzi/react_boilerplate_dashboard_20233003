import React, { FunctionComponent } from 'react';
import Styles from './PaymentMethod.module.scss';
import { IconButton } from '../icon-button';
import { Icon } from 'components/atoms';
import { FormattedMessage } from 'react-intl';

interface Props {
  name?: string;
}

export const PaymentMethod: FunctionComponent<Props> = () => {
  return (
    <div className={Styles.base}>
      <div className={Styles.header}>
        <p className={Styles.title}>
          <FormattedMessage id={'payment_method'} />
        </p>
        <IconButton icon={'add'} className={Styles.button}>
          <FormattedMessage id={'add_new_card'} />
        </IconButton>
      </div>
      <div>
        <div className={Styles.method}>
          <img
            className="MuiBox-root css-qjnh40"
            src="https://demos.creative-tim.com/material-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png"
            alt="master card"
          />
          <h6 className="MuiTypography-root MuiTypography-h6 css-1vkplif">
            ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
          </h6>
          <div className="MuiBox-root css-qg0meg">
            <Icon icon="edit" />
          </div>
        </div>
      </div>
    </div>
  );
};
