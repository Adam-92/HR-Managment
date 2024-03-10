import { Box, ThemeProvider } from '@mui/material';
import { useQueries } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { EditCalendar, PersonSearch, Work } from '@mui/icons-material';

import { getJobs, QUERY_KEY_GET_JOBS } from 'api/jobs/getJobs';
import {
  getCandidates,
  QUERY_KEY_GET_CANDIDATES,
} from 'api/candidates/getCandidates';
import { DataStatusHandler } from 'components/DataStatusHandler/DataStatusHandler';
import { Header } from 'components/Header/Header';
import { Routes } from 'routing/Routes';

import { PanelCard } from './PanelCard/PanelCard';
import { theme } from './style/theme';

export const Dashboard = () => {
  const results = useQueries({
    queries: [
      { queryKey: [QUERY_KEY_GET_JOBS], queryFn: getJobs },
      { queryKey: [QUERY_KEY_GET_CANDIDATES], queryFn: getCandidates },
    ],
  });
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <Header title={t('dashboard.tabs.home')} />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <DataStatusHandler {...results[0]}>
          {(data) => (
            <PanelCard
              text={t('dashboard.tabs.candidates')}
              data={data}
              icon={PersonSearch}
              route={Routes.candidates}
            />
          )}
        </DataStatusHandler>
        <DataStatusHandler {...results[1]}>
          {(data) => (
            <PanelCard
              text={t('dashboard.tabs.jobs')}
              data={data}
              icon={Work}
              route={Routes.jobs}
            />
          )}
        </DataStatusHandler>
        <PanelCard
          route={Routes.meetings}
          text={t('dashboard.tabs.meetings')}
          icon={EditCalendar}
        />
      </Box>
    </ThemeProvider>
  );
};
