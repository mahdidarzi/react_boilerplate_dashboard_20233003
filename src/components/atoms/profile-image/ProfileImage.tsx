import React, { FunctionComponent } from 'react';
import Styles from './ProfileImage.module.scss';
import classNames from 'classnames';

interface Props extends React.HTMLProps<HTMLImageElement> {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  rounded?: boolean;
}

export const ProfileImage: FunctionComponent<Props> = ({ className = '', rounded, small, medium, large, ...props }) => {
  const classes = classNames({
    [className]: classNames,
    [Styles.medium]: medium,
    [Styles.large]: large,
    [Styles.small]: small,
    [Styles.rounded]: rounded,
  });

  return <img {...props} className={classes} />;
};

export default ProfileImage;
