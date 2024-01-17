import { Button, Menu, ListItemIcon } from '@mui/material';
import { Language } from '@mui/icons-material';

import { useMenu } from '../useMenu';

import { MenuItems } from './MenuItems';

export const LanguageMenu = () => {
  const { open, handleClick, handleClose, anchorEl } = useMenu();
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ textTransform: 'lowercase' }}
      >
        <ListItemIcon>
          <Language />
        </ListItemIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItems />
      </Menu>
    </div>
  );
};
