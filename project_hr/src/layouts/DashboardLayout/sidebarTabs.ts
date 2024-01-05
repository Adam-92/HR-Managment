import { Routes } from 'routing/Routes';

export const sidebarTabs = [
  {
    name: 'Home',
    link: Routes.dashboard,
  },
  {
    name: 'Jobs',
    link: Routes.jobs,
  },
  {
    name: 'Calendar',
    link: Routes.calendar,
  },
  {
    name: 'Candidates',
    link: Routes.candidates,
  },
  {
    name: 'Blacklist',
    link: Routes.blacklist,
  },
] as const;
