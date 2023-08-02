import {
  Button,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useUser } from 'api/getUser/hook/useUser';
import { formatFullName } from 'utils/formatFullName';
import { formatInitials } from 'utils/formatiInitials';
import { parseError } from 'errors/parseError';
import { Routes } from 'routing/Routes';
import { useLogOut } from 'api/logOut/useLogOut';

import { useBasicMenu } from './useBasicMenu';

export const BasicMenu = () => {
  const user = useUser();

  const { open, handleClick, handleClose, anchorEl } = useBasicMenu();
  const navigate = useNavigate();
  const logOut = useLogOut();

  if (user.isLoading) {
    return <CircularProgress />;
  }

  if (user.isError) {
    return (
      <Box sx={{ width: '100%' }}>
        <Alert>{parseError(user.isError)}</Alert>
      </Box>
    );
  }

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
        <Avatar sx={{ bgcolor: "'warning.main'" }}>
          {user && formatInitials(user.data)}
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
        <MenuItem>
          <Avatar
            sx={{
              bgcolor: 'darksalmon',
              width: 28,
              height: 28,
              mr: '5px',
              textTransform: 'lowercase',
            }}
          >
            {user && formatInitials(user.data)}
          </Avatar>
          {user && formatFullName(user.data)}
        </MenuItem>
        <MenuItem onClick={() => navigate(Routes.profile)}>Profile</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
