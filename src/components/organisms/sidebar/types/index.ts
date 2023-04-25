export type SidebarItem = {
  icon?: string;
  title: string;
  route: string;
  children?: SidebarItem[];
};
