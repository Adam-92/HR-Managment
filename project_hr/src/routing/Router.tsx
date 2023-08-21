import { createBrowserRouter } from 'react-router-dom';

import { CenteredLayout } from 'layouts/CenteredLayout/CenteredLayout';
import { Home } from 'view/home/Home';
import { SignUp } from 'view/signup/SignUp';
import { SignIn } from 'view/signin/SignIn';
import { ProtectedRoutes } from 'components/ProtectedRoutes/ProtectedRoutes';
import { DashboardLayout } from 'layouts/DashboardLayout/DashboardLayout';
import { Dashboard } from 'view/dashboard/Dashboard';
import { Profile } from 'view/profile/Profile';
import { Jobs } from 'view/jobs/Jobs';
import { UnprotectedRoutes } from 'components/UnprotectedRoutes/UnprotectedRoutes';

import { Routes } from './Routes';

export const router = createBrowserRouter([
  {
    element: <UnprotectedRoutes />,
    children: [
      {
        element: <CenteredLayout />,
        children: [
          {
            path: Routes.home,
            element: <Home />,
          },
          {
            path: Routes.signup,
            element: <SignUp />,
          },
          {
            path: Routes.signin,
            element: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: Routes.dashboard,
            element: <Dashboard />,
          },
          {
            path: Routes.profile,
            element: <Profile />,
          },
          {
            path: Routes.jobs,
            element: <Jobs />,
          },
        ],
      },
    ],
  },
]);
