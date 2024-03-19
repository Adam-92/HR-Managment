import { useSnackbar } from 'notistack';
import {
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import type { ResetPasswordPayload } from 'api/resetPassword/resetPassword';
import { parseError } from 'errors/parseError';
import { resetPassword } from 'api/resetPassword/resetPassword';

import { useLogOut } from '../../../api/logOut/useLogOut';

import { schema } from './validate';

export const ResetPasswordChange = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const logOut = useLogOut();
  const { enqueueSnackbar } = useSnackbar();
  const { mutate, isError, error, isLoading } = useMutation(resetPassword, {
    onSuccess: () => {
      enqueueSnackbar('Password has been reset', {
        variant: 'success',
        onExited: logOut,
      });
    },
  });

  const onSubmit = (payload: ResetPasswordPayload) => mutate(payload);

  if (isLoading) {
    return <CircularProgress />;
  }

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
