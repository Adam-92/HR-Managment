import { Card } from 'react-bootstrap';
import { List, ListSubheader } from '@mui/material';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Routes } from 'routing/Routes';
import {
  QUERY_KEY_GET_PUBLIC_JOBS,
  getPublicJobs,
} from 'api/getPublicJobs/getPublicJobs';
import { jobsToListAdapter } from 'api/getPublicJobs/jobsToListAdapter';

import { JobsList } from './JobsList/JobsList';

export const Home = () => {
  const { data } = useQuery([QUERY_KEY_GET_PUBLIC_JOBS], getPublicJobs);

  const adaptedData = jobsToListAdapter(data);
  return (
    <>
      <Card style={{ width: '18rem', padding: '2rem' }}>
        <Card.Title>HR SCHOOL</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
        <Nav.Link as={Link} to={Routes.signin}>
          <h2 className="bg-warning-subtle">Sign In</h2>
        </Nav.Link>
        <Nav.Link as={Link} to={Routes.signup} className="my-3">
          <h2 className="bg-info-subtle"> Sign Up</h2>
        </Nav.Link>
      </Card>
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
        <JobsList list={adaptedData ?? []} />
      </List>
    </>
  );
};
