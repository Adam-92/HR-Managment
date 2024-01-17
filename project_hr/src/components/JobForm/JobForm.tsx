import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField, Button } from '@mui/material';

import type { Job, JobPayload } from '@types/types';

import { schema } from './validation';

type JobFormProps =
  | {
      type: 'add';
      handleJobFormSubmission: (payload: JobPayload) => void;
    }
  | {
      type: 'edit';
      defaultValues?: Job;
      handleJobFormSubmission: (payload: JobPayload) => void;
    };

export const JobForm = (props: JobFormProps) => {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues:
      props.type === 'edit' ? props.defaultValues : schema.getDefault(),
  });

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      onSubmit={handleSubmit(props.handleJobFormSubmission)}
    >
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
        id="longDescription"
        label="Long Description"
        {...register('longDescription')}
        error={!!errors.longDescription}
        helperText={errors.longDescription?.message}
        multiline
        rows={4}
      />
      <TextField
        id="logo"
        label="Logo"
        {...register('logo')}
        error={!!errors.logo}
        helperText={errors.logo?.message}
      />

      <Button
        variant="contained"
        disabled={!isDirty}
        color="warning"
        type="submit"
      >
        Sumbit
      </Button>
    </Box>
  );
};
