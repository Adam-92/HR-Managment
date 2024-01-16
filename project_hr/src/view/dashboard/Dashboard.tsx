import { Box } from '@mui/material';
import { useQueries } from '@tanstack/react-query';

import { getJobs, QUERY_KEY_GET_JOBS } from 'api/jobs/getJobs';
import {
  getCandidates,
  QUERY_KEY_GET_CANDIDATES,
} from 'api/candidates/getCandidates';
import { DataStatusHandler } from 'components/DataStatusHandler/DataStatusHandler';
import { BasicCard } from 'components/BasicCard/BasicCard';
import { WideCard } from 'components/WideCard/WideCard';
import { Header } from 'components/Header/Header';

export const Dashboard = () => {
  const results = useQueries({
    queries: [
      { queryKey: [QUERY_KEY_GET_JOBS], queryFn: getJobs },
      { queryKey: [QUERY_KEY_GET_CANDIDATES], queryFn: getCandidates },
    ],
  });

  return (
    <>
      <Header title="HR Dashbaord" />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          m: '0 auto',
          width: 575,
          height: '60vh',
        }}
      >
        <DataStatusHandler {...results[0]}>
          {(data) => <BasicCard text="Open positions" data={data} />}
        </DataStatusHandler>
        <DataStatusHandler {...results[1]}>
          {(data) => (
            <>
              <BasicCard text="Candidates" data={data} />
              <WideCard data={data} />
            </>
          )}
        </DataStatusHandler>
      </Box>
    </>
  );
};
