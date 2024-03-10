import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore, PersonSearch } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

import type { TabsType } from '../sidebarTabs';

import { useCollapseTab } from './useCollapseTab';
import { CollapseLink } from './CollapseLink/CollapseLink';

type CollapseTabProps = {
  tabs?: TabsType;
};

export const CollapseTab = ({ tabs }: CollapseTabProps) => {
  const { open, handleOpen, consistentURL } = useCollapseTab();
  const { t } = useTranslation();
  return (
    <>
      <ListItemButton onClick={handleOpen} selected={consistentURL || open}>
        <ListItemIcon>
          <PersonSearch />
        </ListItemIcon>
        <ListItemText primary={t(`dashboard.tabs.candidates`)} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {tabs?.map((tab) => {
            return <CollapseLink tab={tab} key={tab.name} />;
          })}
        </List>
      </Collapse>
    </>
  );
};
