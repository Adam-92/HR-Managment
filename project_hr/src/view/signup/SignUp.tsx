import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';

import { Routes } from 'routing/Routes';
import { parseError } from 'errors/parseError';
import { register as registerUser } from 'api/register/register';
import type { SignUpPayload } from 'api/register/register';
import { Header } from 'components/Header/Header';
import { SubmitButton } from 'components/SubmitButton/SubmitButton';

import { schema } from './validation';

export const SignUp = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { mutate, isLoading } = useMutation(registerUser, {
    onSuccess: () => navigate(Routes.signin),
    onError: (error) => {
      enqueueSnackbar(`${parseError(error)}`, { variant: 'error' });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (payload: SignUpPayload) => mutate(payload);

  return (
    <>
      <Header title="SignUp" />
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="firstName"
          label="firstName"
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          id="lastName"
          label="lastName"
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <TextField
          id="email"
          label="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          id="password"
          label="password"
          type="password"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          id="repeatPassword"
          label="repeatPassword"
          type="password"
          {...register('repeatPassword')}
          error={!!errors.repeatPassword}
          helperText={errors.repeatPassword?.message}
        />
        <SubmitButton isLoading={isLoading} text="Sign Up" />
        <Typography>Already have an account? Then </Typography>
        <Button
          component={Link}
          to={Routes.signin}
          className="bg-warning-subtle"
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};
