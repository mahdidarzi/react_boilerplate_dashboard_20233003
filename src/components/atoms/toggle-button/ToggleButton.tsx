import React from 'react';
import classnames from 'classnames';

import styles from './toggle-button.styles.module.scss';

interface ToggleButtonProps extends React.PropsWithChildren<React.HTMLProps<HTMLInputElement>> {
  title?: string;
  active?: boolean;
}
export const ToggleButton: React.FC<ToggleButtonProps> = ({
  name = 'checkbox',
  className = '',
  active = true,
  disabled = false,
  onClick,
  children,
  ...props
}) => {
  const classes = classnames(styles.base, {
    [className]: className,
    [styles.active]: active,
    [styles.inactive]: !active,
  });
  return (
    <div className={classes}>
      <div className={styles.switch}>
        <input {...props} type="checkbox" id={name} className={styles.switch__input} />
        <label htmlFor={name} className={styles.switch__label}>
          {children}
        </label>
      </div>
    </div>
  );
};
