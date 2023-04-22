import React from 'react';
import classnames from 'classnames';
import styles from './HeroImage.styles.module.scss';

export const HeroImage: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className = '', ...props }) => {
  const classes = classnames(styles.base, {
    [className]: className,
    [styles.base]: true,
  });
  return <div {...props} className={classes}></div>;
};
