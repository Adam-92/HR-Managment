import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
      <Header title={t('home.signup')} />
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="firstName"
          label={t('signup.firstName')}
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          id="lastName"
          label={t('signup.lastName')}
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <TextField
          id="email"
          label={t('signup.email')}
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          id="password"
          label={t('signup.password')}
          type="password"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          id="repeatPassword"
          label={t('signup.repeatPassword')}
          type="password"
          {...register('repeatPassword')}
          error={!!errors.repeatPassword}
          helperText={errors.repeatPassword?.message}
        />
        <SubmitButton isLoading={isLoading} text={t('home.signup')} />
        <Typography>{t('signup.alreadyHaveAcc')} </Typography>
        <Button
          component={Link}
          to={Routes.signin}
          className="bg-warning-subtle"
        >
          {t('home.signin')}
        </Button>
      </Box>
    </>
  );
};
