import React from 'react';
import classnames from 'classnames';

import { CheckIcon } from './assets/CheckIcon';
import styles from './check-box.styles.module.scss';

interface CheckBoxProps {
  className?: string;
  isDisabled?: boolean;
  isChecked: boolean;
  onClick?: () => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  className = '',
  isChecked = false,
  isDisabled = false,
  onClick = () => {
    alert();
  },
}) => {
  const classes = classnames(styles.base, {
    [className]: className,

    [styles.disabled_checked]: isChecked && isDisabled,
    [styles.disabled_not_checked]: !isChecked && isDisabled,
    [styles.checked]: isChecked,
    [styles.not_checked]: isChecked === false,
  });
  return (
    <div className={classes} onClick={onClick}>
      {isChecked ? <CheckIcon /> : null}
    </div>
  );
};
