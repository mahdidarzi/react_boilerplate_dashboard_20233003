import React, { FunctionComponent } from 'react';
import Styles from './BillingInfo.module.scss';
import { IconButton } from '../icon-button';
import { FormattedMessage } from 'react-intl';

interface Props {
  name?: string;
}

const data = [
  {
    name: 'Oliver Liam',
    company: 'Viking Burrito',
    email: 'oliver@burrito.com',
    vat: 'FRB1235476',
  },
  {
    name: 'Oliver Liam',
    company: 'Viking Burrito',
    email: 'oliver@burrito.com',
    vat: 'FRB1235476',
  },
  {
    name: 'Oliver Liam',
    company: 'Viking Burrito',
    email: 'oliver@burrito.com',
    vat: 'FRB1235476',
  },
];

export const BillingInfo: FunctionComponent<Props> = () => {
  return (
    <div className={Styles.base}>
      <div className={Styles.header}>
        <h6 className={Styles.title}>
          <FormattedMessage id={'billing_information'} />
        </h6>
      </div>
      <div className={Styles.container}>
        {data.map((item, index) => {
          return (
            <div className={Styles.item} key={index}>
              <div className="d-flex">
                <p className={Styles.itemName}>{item.name}</p>
                <IconButton className={Styles.itemDelete} icon={'delete'}>
                  <FormattedMessage id={'delete'} />
                </IconButton>
                <IconButton className={Styles.itemEdit} icon={'edit'}>
                  <FormattedMessage id={'edit'} />
                </IconButton>
              </div>
              <div>
                <div className="d-flex mt-3">
                  <p className={Styles.itemKey}>
                    <FormattedMessage id={'company_name'} />:
                  </p>
                  <p className={Styles.itemValue}>{item.company}</p>
                </div>
                <div className="d-flex mt-3">
                  <p className={Styles.itemKey}>
                    <FormattedMessage id={'email_address'} />:
                  </p>
                  <p className={Styles.itemValue}>{item.email}</p>
                </div>
                <div className="d-flex mt-3">
                  <p className={Styles.itemKey}>
                    <FormattedMessage id={'vat_number'} />:
                  </p>
                  <p className={Styles.itemValue}>{item.vat}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
