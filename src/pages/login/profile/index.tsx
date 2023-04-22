import React, { FunctionComponent } from 'react';
import Styles from './Profile.module.scss';
import { RecentProjects } from 'components/organisms/recent-projects/RecentProjects';
import { HeroImage } from 'components/atoms/hero-image';
import { Container } from 'react-bootstrap';
import { ProfileImage } from 'components/atoms/profile-image';

const src =
  'https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg?__cf_chl_tk=rZet47sfNPZxvg_92bUMM6VEygf0C_D8FWnhR1FkK7w-1682165041-0-gaNycGzNDRA';
export const Profile: FunctionComponent = () => {
  return (
    <Container>
      <HeroImage />
      <div className={Styles.card}>
        <ProfileImage large rounded src={src} />
        <RecentProjects />
      </div>
    </Container>
  );
};
