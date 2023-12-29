import { useParams, Link } from 'react-router-dom';
import { Button, CircularProgress, Alert } from '@mui/material';

import { useCandidate } from 'api/candidate/getCandidate/useCandidate';
import { editSingleCandidateUrl, Routes } from 'routing/Routes';
import { parseError } from 'errors/parseError';
import { Header } from 'components/Header/Header';

import { CandidateReadOnlyForm } from './CandidateReadOnlyForm/CandidateReadOnlyForm';

export const Candidate = () => {
  const { id } = useParams();

  if (!id) throw Error('No id in params');

  const { isLoading, isError, error, data } = useCandidate(id);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }

  return (
    <>
      <Header title={data.position} />
      <CandidateReadOnlyForm defaultValues={data} />
      <Button
        component={Link}
        to={editSingleCandidateUrl(id)}
        variant="contained"
        color="warning"
      >
        EDIT
      </Button>
      <Button component={Link} to={Routes.candidates} variant="contained">
        Back To List
      </Button>
    </>
  );
};
