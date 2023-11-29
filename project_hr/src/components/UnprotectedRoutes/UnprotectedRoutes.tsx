import { CircularProgress } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';

import { Routes } from 'routing/Routes';
import { useUser } from 'api/getUser/useUser';

export const UnprotectedRoutes = () => {
  const user = useUser();

  if (user.isLoading) {
    return <CircularProgress />;
  }

  if (user.isSuccess) {
    return <Navigate to={Routes.dashboard} />;
  }

  return <Outlet />;
};
