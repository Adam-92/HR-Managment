import { Routes } from 'routing/Routes';

export const sidebarTabs = [
  {
    name: 'home',
    link: Routes.dashboard,
  },
  {
    name: 'jobs',
    link: Routes.jobs,
  },
  {
    name: 'calendar',
    link: Routes.calendar,
  },
  {
    name: 'candidates',
    link: Routes.candidates,
  },
  {
    name: 'blacklist',
    link: Routes.blacklist,
  },
] as const;
