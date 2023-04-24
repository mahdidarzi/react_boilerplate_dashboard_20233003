import React, { Children, FunctionComponent } from 'react';
import Styles from './PlatformSettingsItem.module.scss';
import { FormattedMessage } from 'react-intl';

interface Props extends React.PropsWithChildren {
  title?: string;
}

export const PlatformSettingsItem: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className={Styles.base}>
      {title && <FormattedMessage id={title} tagName={'span'} />}
      {children}
    </div>
  );
};
