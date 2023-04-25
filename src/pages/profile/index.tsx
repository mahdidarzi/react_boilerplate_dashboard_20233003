import { FunctionComponent } from 'react';
import Styles from './Profile.module.scss';
import { RecentProjects } from 'components/organisms/recent-projects/RecentProjects';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from 'core/redux/store';
import { CardWrapper, HeroImage, ProfileImage } from 'components/atoms';
import {
  TabButton,
  PlatformSettings,
  UserConversations,
  ProfileInformation,
  Header,
  Footer,
} from 'components/organisms';
import { SidebarWrapper } from 'components/organisms/sidebar';

const items = [
  { route: '', title: 'hi', icon: 'public' },
  { route: 'aboutus', title: 'hi', icon: 'public' },
  {
    route: '',
    title: 'hi',
    icon: 'public',
    children: [
      { route: '', title: 'hi', icon: 'public' },
      { route: '', title: 'hi', icon: 'public' },
      { route: '', title: 'hi', icon: 'public' },
    ],
  },
  { route: '', title: 'hi', icon: 'public' },
  { route: '', title: 'hi', icon: 'public' },
];

export const Profile: FunctionComponent = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  return (
    <SidebarWrapper items={items} activeRoute="aboutus">
      <Header canChangeOnScroll isSticky />
      <Container className="mb-5 pb-5 mt-5 ">
        <HeroImage />
        <CardWrapper overlay>
          <Row>
            <Col className="d-flex align-items-center" md={6}>
              <ProfileImage large rounded src={user.profileImage} />
              <div className="d-flex flex-column ms-3">
                <h4 className={Styles.name}>{user?.name}</h4>
                <p className={Styles.position}>{user?.position}</p>
              </div>
            </Col>
            <Col
              className="d-flex mt-3 mt-md-0 align-items-center justify-content-center justify-content-md-end"
              md={6}
            >
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
        </CardWrapper>
      </Container>
      <Footer />
    </SidebarWrapper>
  );
};
