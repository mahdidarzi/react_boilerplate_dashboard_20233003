import { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Styles from './ProfileInformation.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from 'core/redux/store';

export const ProfileInformation: FunctionComponent = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  const classes = classNames(Styles.base, 'd-flex flex-column');

  return (
    <div className={classes}>
      <FormattedMessage id={'ProfileInformation'} tagName={'h6'} />
      <p className={Styles.description}>{user.bio}</p>
      <div className={Styles.infoContainer}>
        <p className={Styles.infoContainer__key}>
          <FormattedMessage id="user.fullName" />:
        </p>
        <p className={Styles.infoContainer__value}>{user?.fullName}</p>
      </div>
      <div className={Styles.infoContainer}>
        <p className={Styles.infoContainer__key}>
          <FormattedMessage id="user.mobile" />:
        </p>
        <p className={Styles.infoContainer__value}>{user?.mobile}</p>
      </div>
      <div className={Styles.infoContainer}>
        <p className={Styles.infoContainer__key}>
          <FormattedMessage id="user.email" />:
        </p>
        <p className={Styles.infoContainer__value}>{user?.email}</p>
      </div>
      <div className={Styles.infoContainer}>
        <p className={Styles.infoContainer__key}>
          <FormattedMessage id="user.location" />:
        </p>
        <p className={Styles.infoContainer__value}>{user.location}</p>
      </div>
    </div>
  );
};
