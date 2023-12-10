import { CircularProgress } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';

import { Routes } from 'routing/Routes';
import { useUser } from 'api/getUser/useUser';

export const ProtectedRoutes = () => {
  const user = useUser();

  if (user.isLoading) {
    return <CircularProgress />;
  }

  if (user.isSuccess) {
    return <Outlet />;
  }
  return <Navigate to={Routes.home} />;
};
