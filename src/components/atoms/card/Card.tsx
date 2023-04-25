import React, { FunctionComponent } from 'react';
import Styles from './Card.module.scss';
import classNames from 'classnames';

interface Props extends React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> {
  overlay?: boolean;
  noGap?: boolean;
}

export const CardWrapper: FunctionComponent<Props> = ({
  className = '',
  children,
  overlay = false,
  noGap,
  ...props
}) => {
  const classes = classNames(Styles.base, {
    [className]: className,
    [Styles.overlay]: overlay,
    [Styles.noGap]: noGap,
  });
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
