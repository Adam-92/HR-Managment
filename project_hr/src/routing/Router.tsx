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
import { Job } from 'view/job/Job';
import { AddJob } from 'view/addJob/AddJob';
import { UnprotectedRoutes } from 'components/UnprotectedRoutes/UnprotectedRoutes';
import { EditJob } from 'view/editJob/EditJob';
import { Candidates } from 'view/candidates/Candidates';
import { Candidate } from 'view/candidate/Candidate';
import { EditCandidate } from 'view/editCandidate/EditCandidate';
import { AddCandidate } from 'view/addCandidate/AddCandidate';

import {
  getSingleJobUrl,
  editSingleJobUrl,
  Routes,
  getSingleCandidateUrl,
  editSingleCandidateUrl,
} from './Routes';

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
          {
            path: getSingleJobUrl(':id'),
            element: <Job />,
          },
          {
            path: editSingleJobUrl(':id'),
            element: <EditJob />,
          },
          {
            path: Routes.addJob,
            element: <AddJob />,
          },
          {
            path: Routes.candidates,
            element: <Candidates />,
          },
          {
            path: getSingleCandidateUrl(':id'),
            element: <Candidate />,
          },
          {
            path: editSingleCandidateUrl(':id'),
            element: <EditCandidate />,
          },
          { path: Routes.addCandidate, element: <AddCandidate /> },
        ],
      },
    ],
  },
]);
