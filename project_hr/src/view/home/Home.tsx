import { List, ListSubheader, Button, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Language } from '@mui/icons-material';

import { Routes } from 'routing/Routes';
import {
  QUERY_KEY_GET_PUBLIC_JOBS,
  getPublicJobs,
} from 'api/getPublicJobs/getPublicJobs';
import { jobsToListAdapter } from 'api/getPublicJobs/jobsToListAdapter';
import { DataStatusHandler } from 'components/DataStatusHandler/DataStatusHandler';
import { LanguageMenu } from 'layouts/DashboardLayout/LangugaeMenu/LanguageMenu';

import { JobsList } from './JobsList/JobsList';

export const Home = () => {
  const results = useQuery([QUERY_KEY_GET_PUBLIC_JOBS], getPublicJobs);

  return (
    <>
      <div style={{ width: '18rem', padding: '2rem' }}>
        <p>HR SCHOOL</p>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </p>
        <LanguageMenu />
        <Button
          component={Link}
          variant="contained"
          color="secondary"
          to={Routes.signin}
        >
          <h2 className="bg-warning-subtle">Sign In</h2>
        </Button>
        <Button
          component={Link}
          variant="contained"
          color="secondary"
          to={Routes.signup}
        >
          <h2 className="bg-info-subtle"> Sign Up</h2>
        </Button>
      </div>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <h5>We are looking for specialists in those technologies:</h5>
          </ListSubheader>
        }
      >
        <DataStatusHandler {...results}>
          {(data) => <JobsList list={jobsToListAdapter(data) ?? []} />}
        </DataStatusHandler>
      </List>
    </>
  );
};
