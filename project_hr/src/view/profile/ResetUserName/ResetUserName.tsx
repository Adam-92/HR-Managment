import { useSnackbar } from 'notistack';
import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { QUERY_KEY_USER } from 'api/getUser/getUser';
import { parseError } from 'errors/parseError';
import {
  resetUsername,
  type ResetUsernamePayload,
} from 'api/resetUsername/resetUsername';

import { schema } from './validate';

export const ResetUsername = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const handleOnSuccess = () => {
    queryClient.invalidateQueries([QUERY_KEY_USER]);
    enqueueSnackbar('Username has been reset', {
      variant: 'success',
      autoHideDuration: 2000,
    });
  };

  const { mutate, isError, error, isLoading } = useMutation(resetUsername, {
    onSuccess: handleOnSuccess,
  });
  const onSubmit = (payload: ResetUsernamePayload) => mutate(payload);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Typography variant="h4" component="h4" sx={{ mt: 5 }}>
        Reset Name:
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          flexDirection: 'column',
          '& .MuiTextField-root': { my: 2, width: '25ch' },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          error={!!errors.firstName}
          id="firstName"
          label="First Name"
          {...register('firstName')}
          helperText={errors.firstName?.message}
        />
        {}
        <TextField
          error={!!errors.lastName}
          id="lastName"
          label="Last Name"
          {...register('lastName')}
          helperText={errors.lastName?.message}
        />
        {isError && (
          <Typography sx={{ color: 'red' }}>{parseError(error)}</Typography>
        )}
        <Button type="submit" variant="contained">
          Change Name
        </Button>
      </Box>
    </Box>
  );
};
