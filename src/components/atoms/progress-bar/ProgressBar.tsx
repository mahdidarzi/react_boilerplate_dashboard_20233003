import React, { FunctionComponent } from 'react';
import Styles from './ProgressBar.module.scss';

interface Props {
  progress: number;
}

export const ProgressBar: FunctionComponent<Props> = ({ progress }) => {
  return (
    <div className={Styles.base}>
      <div className={Styles.progress} style={{ width: `${progress}%` }} />
    </div>
  );
};
