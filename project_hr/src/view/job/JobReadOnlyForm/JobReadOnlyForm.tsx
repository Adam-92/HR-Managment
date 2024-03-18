import { Box, TextField } from '@mui/material';

import type { Job } from 'types/types';

import { formatDate } from '../../../utils/formatDate';

type JobReadOnlyFormProps = {
  defaultValues: Job;
};

export const JobReadOnlyForm = ({ defaultValues }: JobReadOnlyFormProps) => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      className="editForm"
    >
      <TextField
        disabled
        id="id"
        label="id"
        variant="standard"
        defaultValue={defaultValues.id}
        fullWidth
      />
      <TextField
        disabled
        id="createdAt"
        label="createdAt"
        variant="standard"
        defaultValue={formatDate(defaultValues.createdAt)}
        fullWidth
      />

      <TextField
        disabled
        id="company"
        label="Company"
        defaultValue={defaultValues.companyName}
        fullWidth
      />
      <TextField
        disabled
        id="title"
        label="Title"
        defaultValue={defaultValues.title}
        fullWidth
      />
      <TextField
        disabled
        id="shortDescription"
        label="Short Descripion"
        defaultValue={defaultValues.shortDescription}
        fullWidth
      />
      <TextField
        disabled
        id="longDescription"
        label="Long Description"
        defaultValue={defaultValues.longDescription}
        multiline
        rows={4}
        fullWidth
      />
    </Box>
  );
};
