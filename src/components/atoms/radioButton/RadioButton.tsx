import React from 'react';
import classnames from 'classnames';

import styles from './radio-button.styles.module.scss';

interface RadioButtonProps {
  className?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  className = '',
  isChecked = false,
  isDisabled = false,
  onClick = () => {
    alert();
  },
}) => {
  const classes = classnames(styles.base, {
    [className]: className,

    [styles.checked]: isChecked,
    [styles.not_checked]: !isChecked,

    [styles.disabled_checked]: isDisabled && isChecked,
    [styles.disabled_not_checked]: isDisabled && !isChecked,
  });
  return (
    <div
      className={classes}
      onClick={() => {
        isDisabled ? null : onClick();
      }}
    >
      <div className={styles.circle}></div>
    </div>
  );
};
