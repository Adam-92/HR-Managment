import { Helmet } from 'react-helmet-async';

import { JobsTable } from './JobsTable/JobsTable';

export const Jobs = () => {
  return (
    <>
      <Helmet>
        <title>HR Jobs</title>
      </Helmet>
      <JobsTable />
    </>
  );
};
