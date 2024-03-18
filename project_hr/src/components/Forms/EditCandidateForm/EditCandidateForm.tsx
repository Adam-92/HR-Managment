import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField, Button } from '@mui/material';

import type { CandidatePayload } from 'types/types';

import { schema } from './validation';

type EditCandidateFormProps =
  | {
      type: 'add';
      handleEditCandidateFormSubmission: (payload: CandidatePayload) => void;
    }
  | {
      type: 'edit';
      defaultValues?: CandidatePayload;
      handleEditCandidateFormSubmission: (payload: CandidatePayload) => void;
    };

export const EditCandidateForm = (props: EditCandidateFormProps) => {
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
      onSubmit={handleSubmit(props.handleEditCandidateFormSubmission)}
    >
      <TextField
        id="name"
        label="Name"
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
      />
      <TextField
        id="companyName"
        label="Company"
        {...register('companyName')}
        error={!!errors.companyName}
        helperText={errors.companyName?.message}
        fullWidth
      />
      <TextField
        id="position"
        label="position"
        {...register('position')}
        error={!!errors.position}
        helperText={errors.position?.message}
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
