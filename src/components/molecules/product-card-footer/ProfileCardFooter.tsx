import React, { FunctionComponent } from 'react';
import Styles from './ProfileCardFooter.module.scss';
import { FormattedMessage } from 'react-intl';
import { Button, ProfileImage } from 'components/atoms';

interface Props {
  onClick?: () => void;
  people: { src: string; name: string }[];
}

export const ProfileCardFooter: FunctionComponent<Props> = ({ onClick, people }) => {
  return (
    <div className={Styles.base}>
      <Button onClick={onClick} outline>
        <FormattedMessage id="project.viewProject" />
      </Button>
      <div className={Styles.people}>
        {people.map((item, index) => (
          <ProfileImage key={index} src={item.src} small rounded />
        ))}
      </div>
    </div>
  );
};

export default ProfileCardFooter;
