import { Box, TextField } from '@mui/material';

import type { Candidate } from 'types/types';
import { formatDate } from 'utils/formatDate';

type CandidateReadOnlyFormProps = {
  defaultValues: Candidate;
};

export const CandidateReadOnlyForm = ({
  defaultValues,
}: CandidateReadOnlyFormProps) => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
    >
      <TextField
        disabled
        id="id"
        label="id"
        variant="standard"
        defaultValue={defaultValues.id}
      />
      <TextField
        disabled
        id="createdAt"
        label="createdAt"
        variant="standard"
        defaultValue={formatDate(defaultValues.createdAt)}
      />

      <TextField
        disabled
        id="name"
        label="Name"
        defaultValue={defaultValues.name}
      />
      <TextField
        disabled
        id="position"
        label="Position"
        defaultValue={defaultValues.position}
      />

      <TextField
        disabled
        id="company"
        label="Company"
        defaultValue={defaultValues.companyName}
      />
      <TextField
        disabled
        id="shortDescription"
        label="Short Descripion"
        defaultValue={defaultValues.shortDescription}
      />
      <TextField
        disabled
        id="longDescription"
        label="Long Description"
        defaultValue={defaultValues.longDescription}
        multiline
        rows={4}
      />
    </Box>
  );
};
