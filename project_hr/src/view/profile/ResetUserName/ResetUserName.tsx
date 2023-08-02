import { Box, TextField, Typography, Button } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { QUERY_KEY_USER } from 'api/getUser/getUser';
import { parseError } from 'errors/parseError';
import { useSnackbarHandler } from 'hooks/useSnackbarHandler';

import { axios } from '../../../axios/axios';

import { schema } from './validate';

type ResetUserNamePayload = {
  firstName: string;
  lastName: string;
};

export const ResetUserName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const queryClient = useQueryClient();
  const handleOpenSnackbar = useSnackbarHandler();
  const handleOnSuccess = () => {
    queryClient.invalidateQueries([QUERY_KEY_USER]);
    handleOpenSnackbar('You have sucessfully changed the name', 'success');
  };

  const { mutate, isError, error } = useMutation(
    (payload: ResetUserNamePayload) => {
      return axios.put('users/me', payload);
    },
    {
      onSuccess: handleOnSuccess,
    },
  );
  /* Tutaj będzie wysłany, też repeatNewPassword  */
  const onSubmit = (payload: ResetUserNamePayload) => mutate(payload);

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
