import { MenuItem, Avatar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { UseQueryResult } from '@tanstack/react-query';

import { Routes } from 'routing/Routes';
import { useLogOut } from 'api/logOut/useLogOut';
import { formatFullName } from 'utils/formatFullName';
import { formatUserInitials } from 'utils/formatInitials';
import type { GetUser } from 'api/getUser/getUser';

import { sxBorder, sxItem } from './style';

type MenuItemsProps = {
  user: UseQueryResult<GetUser, unknown>;
  onClose: () => void;
};

export const MenuItems = ({ user, onClose }: MenuItemsProps) => {
  const navigate = useNavigate();
  const logout = useLogOut();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user.data && (
        <>
          <MenuItem onClick={onClose} sx={sxBorder}>
            <Avatar className="avatar">{formatUserInitials(user.data)}</Avatar>
            <Typography>{formatFullName(user.data)}</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate(Routes.profile);
              onClose();
            }}
            sx={sxItem}
          >
            Profile
          </MenuItem>
          <MenuItem onClick={logout} sx={{ justifyContent: 'center' }}>
            Logout
          </MenuItem>
        </>
      )}
    </>
  );
};
