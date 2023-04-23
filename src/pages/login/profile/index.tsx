import { FunctionComponent } from 'react';
import Styles from './Profile.module.scss';
import { RecentProjects } from 'components/organisms/recent-projects/RecentProjects';
import { HeroImage } from 'components/atoms/hero-image';
import { Col, Container, Row } from 'react-bootstrap';
import { ProfileImage } from 'components/atoms/profile-image';
import { useSelector } from 'react-redux';
import { RootState } from 'core/redux/store';
import { Card } from 'components/atoms/card';
import { TabButton, PlatformSettings, UserConversations, ProfileInformation } from 'components/organisms';

export const Profile: FunctionComponent = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  return (
    <Container>
      <HeroImage />
      <Card overlay>
        <Row>
          <Col className="d-flex align-items-center" md={6}>
            <ProfileImage large rounded src={user.profileImage} />
            <div className="d-flex flex-column ms-3">
              <h4 className={Styles.name}>{user?.name}</h4>
              <p className={Styles.position}>{user?.position}</p>
            </div>
          </Col>
          <Col className="d-flex mt-3 mt-md-0 align-items-center justify-content-center justify-content-md-end" md={6}>
            <TabButton />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <PlatformSettings />
          </Col>
          <Col xs={12} md={6} lg={4} className={Styles.middleCard}>
            <div className={Styles.seporator} />
            <ProfileInformation />
            <div className={Styles.seporator} />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <UserConversations />
          </Col>
        </Row>
        <RecentProjects />
      </Card>
    </Container>
  );
};
