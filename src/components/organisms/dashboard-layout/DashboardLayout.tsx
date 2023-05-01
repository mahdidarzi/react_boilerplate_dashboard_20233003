import { FunctionComponent, PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from 'components/organisms';
import { SidebarWrapper } from 'components/organisms/sidebar';
import { useLocation } from 'react-router';

const items = [
  { route: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
  { route: '/dashboard/tables', title: 'Tables', icon: 'table_view' },

  { route: '/dashboard/billing', title: 'Billing', icon: 'receipt_long' },
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
  const location = useLocation();
  return (
    <SidebarWrapper items={items} activeRoute={location.pathname || 'p'}>
      <Header canChangeOnScroll isSticky />
      <Container className="mb-5 pb-5 mt-5 ">{children}</Container>
    </SidebarWrapper>
  );
};
