import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField, Button } from '@mui/material';

import type { JobPayload } from 'types/types';

import { schema } from './validation';

type EditJobFormProps =
  | {
      type: 'add';
      handleEditJobFormSubmission: (payload: JobPayload) => void;
    }
  | {
      type: 'edit';
      defaultValues?: JobPayload;
      handleEditJobFormSubmission: (payload: JobPayload) => void;
    };

export const EditJobForm = (props: EditJobFormProps) => {
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
      className="editForm"
      onSubmit={handleSubmit(props.handleEditJobFormSubmission)}
    >
      <TextField
        id="company"
        label="Company"
        {...register('companyName')}
        error={!!errors.companyName}
        helperText={errors.companyName?.message}
        fullWidth
      />
      <TextField
        id="title"
        label="Title"
        {...register('title')}
        error={!!errors.title}
        helperText={errors.title?.message}
        fullWidth
      />
      <TextField
        id="shortDescription"
        label="Short Descripion"
        {...register('shortDescription')}
        error={!!errors.shortDescription}
        helperText={errors.shortDescription?.message}
        fullWidth
      />
      <TextField
        id="longDescription"
        label="Long Description"
        {...register('longDescription')}
        error={!!errors.longDescription}
        helperText={errors.longDescription?.message}
        multiline
        rows={4}
        fullWidth
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
