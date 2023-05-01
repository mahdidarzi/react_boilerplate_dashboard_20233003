import React, { FunctionComponent } from 'react';
import Styles from './IconCard.module.scss';
import { Icon } from 'components/atoms';

interface Props {
  icon?: string;
  color?: string;
  shadow?: string;
  title?: string;
  value?: string;
  percent?: string;
  footerText?: string;
}

export const IconCard: FunctionComponent<Props> = ({
  icon = 'weekend',
  color = 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
  shadow = '',
  title = 'Bookings',
  value = 281,
  percent,
  footerText = 'than last week',
}) => {
  const IconStyle = React.useMemo(() => ({ background: color, boxShadow: `0 0 16 ${shadow}` }), [color, shadow]);

  return (
    <div className={Styles.base}>
      <div className="d-flex w-100 justify-content-between">
        <Icon icon={icon} className={Styles.icon} style={IconStyle} />
        <div className={Styles.titleContainer}>
          <p className={Styles.title}>{title}</p>
          <p className={Styles.data}>{value}</p>
        </div>
      </div>
      <hr className={Styles.devider} />
      <div className={Styles.footerContainer}>
        {percent && <p className={Styles.percent}>{percent}%</p>}
        <p className={Styles.footerText}>{footerText}</p>
      </div>
    </div>
  );
};
