import { FunctionComponent, PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from 'components/organisms';
import { SidebarWrapper } from 'components/organisms/sidebar';

const items = [
  { route: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
  { route: '/tables', title: 'Tables', icon: 'table_view' },

  { route: '/billing', title: 'Billing', icon: 'receipt_long' },
  //   { route: '', title: 'hi', icon: 'public' },
  /*   {
    route: '',
    title: 'hi',
    icon: 'public',
    children: [
      { route: '', title: 'hi', icon: 'public' },
      { route: '', title: 'hi', icon: 'public' },
      { route: '', title: 'hi', icon: 'public' },
    ],
  }, */
];
export const DashboardLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <SidebarWrapper items={items} activeRoute="aboutus">
      <Header canChangeOnScroll isSticky />
      <Container className="mb-5 pb-5 mt-5 ">{children}</Container>
    </SidebarWrapper>
  );
};
