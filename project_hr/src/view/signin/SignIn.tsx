import {
  Box,
  TextField,
  Link,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Typography,
  ThemeProvider,
  Container,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { LockOutlined } from '@mui/icons-material';

import { Routes } from 'routing/Routes';
import { tokenStorage } from 'class/tokenStorageClass';
import { logIn } from 'api/logIn/logIn';
import { parseError } from 'errors/parseError';
import type { Tokens } from 'axios/axios.types';
import type { SignInPayload } from 'api/logIn/logIn';
import { Header } from 'components/Header/Header';
import { SubmitButton } from 'components/SubmitButton/SubmitButton';
import { LanguageMenu } from 'layouts/DashboardLayout/LangugaeMenu/LanguageMenu';

import { sxFlexBox, theme } from './theme';
import { schema } from './validation';

export type SignInResponse = {
  data: Tokens;
};

export const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const isRememberMe = !!watch('rememberMe');
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { mutate, isLoading } = useMutation(logIn, {
    onSuccess: ({ data }: SignInResponse) => {
      tokenStorage.saveAccessToken(data.accessToken, isRememberMe);
      tokenStorage.saveRefreshToken(data.refreshToken, isRememberMe);
      navigate(Routes.dashboard);
    },
    onError: (error) => {
      enqueueSnackbar(`${parseError(error)}`, { variant: 'error' });
    },
  });

  const onSubmit = async (payload: SignInPayload) => mutate(payload);

  return (
    <>
      <Header title={t('home.signin')} />
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
                id="email"
                label={t('signin.email')}
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                id="password"
                label={t('signin.password')}
                type="password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <FormGroup>
                <FormControlLabel
                  {...register('rememberMe')}
                  control={<Checkbox />}
                  label={t('signin.rememberMe')}
                />
              </FormGroup>
              <SubmitButton isLoading={isLoading} text={t('home.signin')} />
              <Link href={Routes.signup}>{t('signin.dontHaveAcc')}</Link>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
