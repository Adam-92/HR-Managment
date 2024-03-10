import {
  Button,
  Menu,
  Avatar,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';

import { useUser } from 'api/getUser/useUser';
import { formatUserInitials } from 'utils/formatInitials';
import { parseError } from 'errors/parseError';

import { useMenu } from '../useMenu';

import { MenuItems } from './MenuItems';

export const AvatarMenu = () => {
  const user = useUser();

  const { open, handleClick, handleClose, anchorEl } = useMenu();

  if (user.isLoading) {
    return <CircularProgress />;
  }

  if (user.isError) {
    return (
      <Box sx={{ width: '100%' }}>
        <Alert>{parseError(user.error)}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ ml: 'auto' }}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ textTransform: 'lowercase' }}
      >
        <Avatar sx={{ bgcolor: "'warning.main'" }}>
          {formatUserInitials(user.data)}
        </Avatar>
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
        <MenuItems user={user} onClose={handleClose} />
      </Menu>
    </Box>
  );
};
