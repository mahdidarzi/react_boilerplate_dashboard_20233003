import React, { FunctionComponent } from 'react';
import Styles from './Invoces.module.scss';
import { Button } from 'components/atoms';
import { IconButton } from '../icon-button';
import { FormattedMessage } from 'react-intl';

interface Props {
  name?: string;
}

const data = [
  {
    date: 'March, 01, 2020',
    code: '#MS-415646',
    price: '$180',
  },
  {
    date: 'March, 01, 2020',
    code: '#MS-415646',
    price: '$180',
  },
  {
    date: 'March, 01, 2020',
    code: '#MS-415646',
    price: '$180',
  },
  {
    date: 'March, 01, 2020',
    code: '#MS-415646',
    price: '$180',
  },
  {
    date: 'March, 01, 2020',
    code: '#MS-415646',
    price: '$180',
  },
  {
    date: 'March, 01, 2020',
    code: '#MS-415646',
    price: '$180',
  },
];

export const Invoces: FunctionComponent<Props> = () => {
  return (
    <div className={Styles.base}>
      <div className={Styles.header}>
        <p className={Styles.title}>
          <FormattedMessage id={'invoices'} />
        </p>
        <Button className={Styles.button}>
          <FormattedMessage id={'view_all'} />
        </Button>
      </div>
      <div className={Styles.container}>
        {data.map((item, index) => {
          return (
            <div key={index} className={Styles.item}>
              <div className="flex-grow-1">
                <p className={Styles.itemTitle}>{item.date}</p>
                <p className={Styles.itemCode}>{item.code}</p>
              </div>
              <p className={Styles.price}>{item.price}</p>
              <IconButton icon={'picture_as_pdf'}>
                <FormattedMessage id={'pdf'} />
              </IconButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};
