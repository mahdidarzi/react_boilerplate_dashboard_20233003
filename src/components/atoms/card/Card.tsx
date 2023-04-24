import React, { FunctionComponent } from 'react';
import Styles from './Card.module.scss';
import classNames from 'classnames';

interface Props extends React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> {
  overlay?: boolean;
}

export const Card: FunctionComponent<Props> = ({ className = '', children, overlay = false, ...props }) => {
  const classes = classNames(Styles.base, { [className]: className, [Styles.overlay]: overlay });
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
