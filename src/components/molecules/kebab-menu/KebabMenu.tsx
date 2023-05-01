import React, { FunctionComponent } from 'react';
import Styles from './KebabMenu.module.scss';
import { Icon } from 'components/atoms';
import classNames from 'classnames';

export const KebabMenu: FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleClick() {
    setIsOpen((s) => !s);
  }

  const classes = classNames(Styles.menu, { [Styles.menuIsOpen]: isOpen });

  return (
    <div className={Styles.base}>
      <Icon icon="more_vert" className={Styles.icon} onClick={handleClick} />
      <div className={classes}>
        <div className={Styles.item}>Action</div>
        <div className={Styles.item}>Action 2</div>
        <div className={Styles.item}>Action 3</div>
      </div>
    </div>
  );
};
