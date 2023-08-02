import { Spinner } from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom';

import { Routes } from 'routing/Routes';
import { useUser } from 'api/getUser/hook/useUser';

export const ProtectedRoutes = () => {
  const user = useUser();

  if (user.isLoading) {
    return <Spinner animation="border" />;
  }

  if (user.isSuccess) {
    return <Outlet />;
  }
  return <Navigate to={Routes.home} />;
};
