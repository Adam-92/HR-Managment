import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
  Box,
  TextField,
  Link,
  Typography,
  ThemeProvider,
  Container,
  Avatar,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { LockOutlined } from '@mui/icons-material';

import { Routes } from 'routing/Routes';
import { parseError } from 'errors/parseError';
import { register as registerUser } from 'api/register/register';
import type { SignUpPayload } from 'api/register/register';
import { Header } from 'components/Header/Header';
import { SubmitButton } from 'components/SubmitButton/SubmitButton';
import { sxFlexBox, theme } from 'view/signin/theme';
import { LanguageMenu } from 'layouts/DashboardLayout/LangugaeMenu/LanguageMenu';

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
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <LanguageMenu />
          <Box sx={sxFlexBox}>
            <Avatar>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              JOBS
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit(onSubmit)}
            >
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
              <Link href={Routes.signin}> {t('signup.alreadyHaveAcc')}</Link>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
