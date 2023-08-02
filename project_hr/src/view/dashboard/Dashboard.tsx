import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';

import { DataStatusHandler } from 'components/DataStatusHandler/DataStatusHandler';
import { BasicCard } from 'components/BasicCard/BasicCard';
import { WideCard } from 'components/WideCard/WideCard';

import { usePositions } from './hooks/usePositions';
import { useCandidates } from './hooks/useCadidates';

export const Dashboard = () => {
  const positions = usePositions();
  const candidates = useCandidates();

  return (
    <>
      <Helmet>
        <title>HR Dashbaord</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          m: '0 auto',
          width: 575,
          height: '60vh',
        }}
      >
        <DataStatusHandler
          isLoading={positions.isLoading}
          error={positions.error}
          data={positions.data}
        >
          {(data) => <BasicCard text="Open positions" data={data} />}
        </DataStatusHandler>
        <DataStatusHandler
          isLoading={candidates.isLoading}
          error={candidates.error}
          data={candidates.data}
        >
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
