import { Box, TextField, Typography, Button } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { parseError } from 'errors/parseError';
import { useSnackbarHandler } from 'hooks/useSnackbarHandler';

import { useLogOut } from '../../../api/logOut/useLogOut';
import { axios } from '../../../axios/axios';

import { schema } from './validate';

type ResetPasswordPayload = {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const handleOpenSnackbar = useSnackbarHandler();
  const logOut = useLogOut();
  const handleOnSuccess = () => {
    handleOpenSnackbar('You have sucessfully changed the password', 'success');
    setTimeout(logOut, 2000);
  };

  const { mutate, isError, error } = useMutation(
    (payload: ResetPasswordPayload) => {
      return axios.post('/auth/change-password', payload);
    },
    {
      onSuccess: handleOnSuccess,
    },
  );

  const onSubmit = (payload: ResetPasswordPayload) => mutate(payload);

  return (
    <Box>
      <Typography variant="h4" component="h4" sx={{ mt: 5 }}>
        Reset Password
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
          error={!!errors.oldPassword}
          type="password"
          id="oldPassword"
          label="Old Password"
          {...register('oldPassword')}
          helperText={errors.oldPassword?.message}
        />
        {}
        <TextField
          error={!!errors.newPassword}
          type="password"
          id="password"
          label="New Password"
          {...register('newPassword')}
          helperText={errors.newPassword?.message}
        />
        <TextField
          error={!!errors.repeatNewPassword}
          type="password"
          id="repeatNewPassword"
          label="Repeat New Password"
          {...register('repeatNewPassword')}
          helperText={errors.repeatNewPassword?.message}
        />
        {isError && (
          <Typography sx={{ color: 'red' }}>{parseError(error)}</Typography>
        )}
        <Button type="submit" variant="contained">
          Change Password
        </Button>
      </Box>
    </Box>
  );
};
