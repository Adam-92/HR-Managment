import {
  Button,
  Menu,
  ListItemIcon,
  Typography,
  Box,
  ThemeProvider,
} from '@mui/material';
import { Language } from '@mui/icons-material';

import { sxFlexBox } from 'view/signin/theme';

import { useMenu } from '../useMenu';

import { MenuItems } from './MenuItems';
import { theme } from './theme';

export const LanguageMenu = () => {
  const { open, handleClick, handleClose, anchorEl, currentLanguage } =
    useMenu();
  console.log('🚀 ~ currentLanguage:', currentLanguage);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Box sx={{ ...sxFlexBox, flexDirection: 'row' }}>
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <Typography>
              {currentLanguage === 'en - US' ||
                (currentLanguage === 'en' && 'EN')}
            </Typography>
            <Typography>{currentLanguage === 'pl' && 'PL'}</Typography>
          </Box>
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
          <MenuItems onClose={handleClose} />
        </Menu>
      </Box>
    </ThemeProvider>
  );
};
