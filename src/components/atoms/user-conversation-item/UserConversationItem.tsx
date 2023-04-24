import React, { FunctionComponent } from 'react';
import Styles from './UserConversationItem.module.scss';
import classNames from 'classnames';
import { ProfileImage } from '../profile-image';
import { FormattedMessage } from 'react-intl';
import { Button } from '..';

interface Props {
  profileImage: string;
  name: string;
  text: string;
}

export const UserConversationItem: FunctionComponent<Props> = ({ profileImage, name, text }) => {
  return (
    <div className={Styles.base}>
      <ProfileImage src={profileImage} medium={true} rounded />
      <div className="d-flex flex-column ms-3">
        <p className={Styles.name}>{name}</p>
        <p className={Styles.text}>{text}</p>
      </div>
      <a>
        <FormattedMessage id="reply" />
      </a>
    </div>
  );
};
