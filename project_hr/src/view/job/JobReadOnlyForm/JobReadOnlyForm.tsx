import { Box, TextField } from '@mui/material';

import type { Job } from '@types/types';

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
        id="company"
        label="Company"
        defaultValue={defaultValues.companyName}
      />
      <TextField
        disabled
        id="title"
        label="Title"
        defaultValue={defaultValues.title}
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
      <TextField
        disabled
        id="logo"
        label="Logo"
        defaultValue={defaultValues.logo}
      />
    </Box>
  );
};
