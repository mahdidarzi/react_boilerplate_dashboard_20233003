import React from 'react';
import classnames from 'classnames';

import styles from './toggle-button.styles.module.scss';

interface ToggleButtonProps {
  className?: string;
  disabled?: boolean;
  active: boolean;
  onClick?: () => void;
}
export const ToggleButton: React.FC<ToggleButtonProps> = ({
  className = '',
  active = false,
  disabled = false,
  onClick = () => {},
}) => {
  const classes = classnames(styles.base, {
    [className]: className,
    [styles.active]: active,
    [styles.inactive]: !active,
  });
  return (
    <button disabled={disabled} className={classes} onClick={onClick}>
      <div className={styles.circle}></div>
    </button>
  );
};
