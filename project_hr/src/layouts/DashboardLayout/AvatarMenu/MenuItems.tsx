import { MenuItem, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { UseQueryResult } from '@tanstack/react-query';

import { Routes } from 'routing/Routes';
import { useLogOut } from 'api/logOut/useLogOut';
import { formatFullName } from 'utils/formatFullName';
import { formatInitials } from 'utils/formatiInitials';
import type { GetUser } from 'api/getUser/getUser';

type MenuItemsProps = {
  user: UseQueryResult<GetUser, unknown>;
};

export const MenuItems = ({ user }: MenuItemsProps) => {
  const navigate = useNavigate();
  const logout = useLogOut();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user.data && (
        <>
          <MenuItem>
            <Avatar
              sx={{
                bFFFFgcolor: 'darksalmon',
                width: 28,
                height: 28,
                mr: '5px',
                textTransform: 'lowercase',
              }}
            >
              {formatInitials(user.data)}
            </Avatar>
            {formatFullName(user.data)}
          </MenuItem>
          <MenuItem onClick={() => navigate(Routes.profile)}>Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </>
      )}
    </>
  );
};
