import { ProjectCard } from 'components/molecules/project-card';
import React, { FunctionComponent, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Styles from './TabButton.module.scss';
import { IconButton } from 'components/molecules';
import classNames from 'classnames';

export const TabButton: FunctionComponent = () => {
  const [selected, setSelected] = useState<number>(0);
  const classes = classNames(Styles.base, 'd-flex flex-column flex-md-row');

  const buttonClasses = (avtiveIndex: number) => classNames({ [Styles.activeButton]: selected === avtiveIndex });

  function handleClick(num: number) {
    setSelected(num);
  }
  return (
    <div className={classes}>
      <IconButton
        className={buttonClasses(0)}
        icon="home"
        onClick={() => {
          handleClick(0);
        }}
      >
        <FormattedMessage id={'app'} />
      </IconButton>
      <IconButton
        className={buttonClasses(1)}
        icon="mail"
        onClick={() => {
          handleClick(1);
        }}
      >
        <FormattedMessage id={'messages'} />
      </IconButton>
      <IconButton
        className={buttonClasses(2)}
        icon="settings"
        onClick={() => {
          handleClick(2);
        }}
      >
        <FormattedMessage id={'settings'} />
      </IconButton>
    </div>
  );
};
