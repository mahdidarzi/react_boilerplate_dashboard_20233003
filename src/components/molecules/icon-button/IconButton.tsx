import React, { Children, FunctionComponent } from 'react';
import Styles from './IconButton.module.scss';
import { Button, ButtonProps } from 'components/atoms/button';
import { Icon } from 'components/atoms/icon';

interface Props extends ButtonProps {
  icon: string;
}

export const IconButton: FunctionComponent<Props> = ({ children, icon, ...props }) => {
  return (
    <Button {...props}>
      <div className="d-flex align-items-center">
        <Icon icon={icon} />
        {children}
      </div>
    </Button>
  );
};
