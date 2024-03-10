import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useMatch, useResolvedPath } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { TabType } from '../sidebarTabs';

type LinkTabProps = {
  tab: TabType;
};

export const Tab = ({ tab }: LinkTabProps) => {
  const resolved = useResolvedPath(tab.link ?? '');
  const match = useMatch({ path: resolved.pathname, end: false });
  const { t } = useTranslation();
  return (
    <Link href={tab.link} underline="none" color="inherit">
      <ListItemButton selected={!!match}>
        <ListItemIcon>{tab.icon ? <tab.icon /> : null}</ListItemIcon>
        <ListItemText primary={t(`dashboard.tabs.${tab.name}`)} />
      </ListItemButton>
    </Link>
  );
};
