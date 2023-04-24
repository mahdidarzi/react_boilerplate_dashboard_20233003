import React from 'react';
import classnames from 'classnames';
import styles from './icon.styles.module.scss';

interface CheckBoxProps extends React.HTMLProps<HTMLSpanElement> {
  icon: string;
}

export const Icon: React.FC<CheckBoxProps> = ({ icon, className = '', ...props }) => {
  const classes = classnames(styles.base, {
    'material-icons': true,
    [className]: className,
  });
  return (
    <span {...props} className={classes}>
      {icon}
    </span>
  );
};
