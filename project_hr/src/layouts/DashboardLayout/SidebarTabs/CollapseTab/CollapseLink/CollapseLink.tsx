import { Link, ListItemButton, ListItemText } from '@mui/material';
import { useResolvedPath, useMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { TabType } from '../../sidebarTabs';

type CollapseLinkProps = {
  tab: TabType;
};

export const CollapseLink = ({ tab }: CollapseLinkProps) => {
  const resolved = useResolvedPath(tab.link ?? '');
  const match = useMatch({ path: resolved.pathname, end: true });
  const { t } = useTranslation();

  return (
    <Link href={tab.link} color="inherit" underline="none">
      <ListItemButton sx={{ pl: 9 }} selected={!!match}>
        <ListItemText primary={t(`dashboard.tabs.${tab.name}`)} />
      </ListItemButton>
    </Link>
  );
};
