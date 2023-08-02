import { useCallback, useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

import type { ListItemProps } from './JobsList.types';

export const ListItem = ({ listItem, renderList }: ListItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleExpandingIcons = useCallback(() => {
    if (!listItem.subList) return null;
    if (isOpen && listItem.subList) {
      return <ExpandLess />;
    }
    return <ExpandMore />;
  }, [isOpen, listItem.subList]);

  return (
    <>
      <ListItemButton
        onClick={() => {
          if (listItem.subList) {
            handleClick();
          }
        }}
      >
        {!listItem.subList ? (
          <>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText secondary={listItem.name} />
          </>
        ) : (
          <ListItemText primary={listItem.name} />
        )}

        {handleExpandingIcons()}
      </ListItemButton>
      {listItem.subList && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 5 }}>
            {renderList(listItem)}
          </List>
        </Collapse>
      )}
    </>
  );
};
