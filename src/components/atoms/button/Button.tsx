import React, { FunctionComponent } from 'react';
import Styles from './Button.module.scss';
import classNames from 'classnames';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  outline?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({ outline, className = '', ...props }) => {
  const classes = classNames(Styles.base, {
    [className]: classNames,
    [Styles.outline]: outline,
  });

  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};
