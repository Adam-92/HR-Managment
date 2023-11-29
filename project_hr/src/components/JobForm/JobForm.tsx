import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField, Button } from '@mui/material';

import type { AddJobPayload } from '../../api/addJob/addJob';

import { schema } from './validation';

type JobFormProps =
  | {
      type: 'add';
      handleJobFormSubmission: (payload: AddJobPayload) => void;
    }
  | {
      type: 'edit';
      defaultValue: AddJobPayload;
      handleJobFormSubmission: (payload: AddJobPayload) => void;
    };

export const JobForm = (props: JobFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      onSubmit={handleSubmit(props.handleJobFormSubmission)}
    >
      <div>
        <TextField
          id="company"
          label="Company"
          {...register('companyName')}
          error={!!errors.companyName}
          helperText={errors.companyName?.message}
        />
        <TextField
          id="title"
          label="Title"
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          id="shortDescription"
          label="Short Descripion"
          {...register('shortDescription')}
          error={!!errors.shortDescription}
          helperText={errors.shortDescription?.message}
        />
        <TextField
          id="Description"
          label="Description"
          {...register('longDescription')}
          error={!!errors.longDescription}
          helperText={errors.longDescription?.message}
          multiline
          rows={4}
        />
        <TextField
          id="logo"
          label="Logo"
          defaultValue="https://picsum.photos/200/30"
          {...register('logo')}
          error={!!errors.logo}
          helperText={errors.logo?.message}
        />
      </div>
      <Button variant="contained" color="warning" type="submit">
        Sumbit
      </Button>
    </Box>
  );
};
