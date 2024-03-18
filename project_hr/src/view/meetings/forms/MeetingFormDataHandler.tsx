import { Alert, CircularProgress } from '@mui/material';
import { useQueries } from '@tanstack/react-query';

import {
  QUERY_KEY_GET_CANDIDATES,
  getCandidates,
} from 'api/candidates/getCandidates';
import { QUERY_KEY_GET_JOBS, getJobs } from 'api/jobs/getJobs';
import { parseError } from 'errors/parseError';
import type { AutocompleteData } from 'types/types';

export type ModalFormHandlerProps = {
  children: (
    jobsData: AutocompleteData,
    candidatesData: AutocompleteData,
  ) => JSX.Element;
};

export const MeetingFormDataHandler = ({ children }: ModalFormHandlerProps) => {
  const [jobs, candidates] = useQueries({
    queries: [
      { queryKey: [QUERY_KEY_GET_JOBS], queryFn: getJobs },
      { queryKey: [QUERY_KEY_GET_CANDIDATES], queryFn: getCandidates },
    ],
  });

  if (jobs.isLoading || candidates.isLoading) {
    return <CircularProgress />;
  }

  if (!jobs.data) {
    return <Alert severity="warning">{parseError(jobs.error)}</Alert>;
  }

  if (!candidates.data) {
    return <Alert severity="warning">{parseError(candidates.error)}</Alert>;
  }

  const jobsData = jobs.data.map((job) => ({
    label: job.title,
    id: job.id,
  }));

  const candidatesData = candidates.data.map((candidate) => ({
    label: candidate.name,
    id: candidate.id,
  }));

  return children(jobsData, candidatesData);
};
