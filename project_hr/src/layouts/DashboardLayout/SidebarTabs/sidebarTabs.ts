import {
  Window,
  Work,
  EditCalendar,
  PersonSearch,
  type SvgIconComponent,
} from '@mui/icons-material';

import { Routes } from 'routing/Routes';

export type TabTypeNames =
  | 'home'
  | 'jobs'
  | 'meetings'
  | 'candidates'
  | 'list'
  | 'blacklist';

export type TabType = {
  name: TabTypeNames;
  link?: string;
  icon?: SvgIconComponent;
  children?: TabType[];
};

export type TabsType = TabType[];

export const sidebarTabs: TabsType = [
  {
    name: 'home',
    link: Routes.dashboard,
    icon: Window,
  },
  {
    name: 'jobs',
    link: Routes.jobs,
    icon: Work,
  },
  {
    name: 'meetings',
    link: Routes.meetings,
    icon: EditCalendar,
  },
  {
    name: 'candidates',
    icon: PersonSearch,
    children: [
      {
        name: 'list',
        link: Routes.candidates,
      },
      {
        name: 'blacklist',
        link: Routes.blacklistCandidates,
      },
    ],
  },
];
