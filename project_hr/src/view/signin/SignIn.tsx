import {
  Box,
  TextField,
  Button,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Alert,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';

import { Routes } from 'routing/Routes';
import { tokenStorage } from 'class/tokenStorageClass';
import { logIn } from 'api/logIn/logIn';
import { parseError } from 'errors/parseError';
import type { Tokens } from 'axios/axios.types';
import type { SignInPayload } from 'api/logIn/logIn';
import { Header } from 'components/Header/Header';

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

  const navigate = useNavigate();

  const { mutate, isError, error } = useMutation(logIn, {
    onSuccess: ({ data }: SignInResponse) => {
      tokenStorage.saveAccessToken(data.accessToken, isRememberMe);
      tokenStorage.saveRefreshToken(data.refreshToken, isRememberMe);
      navigate(Routes.dashboard);
    },
  });

  const onSubmit = async (payload: SignInPayload) => mutate(payload);

  return (
    <>
      <Header title="SignIn" />
      <Typography variant="h3">SIGN IN</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email:"
          label="Email"
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
        <FormGroup>
          <FormControlLabel
            {...register('rememberMe')}
            control={<Checkbox />}
            label="Remember Me"
          />
        </FormGroup>
        <Button variant="contained" type="submit">
          Sign In
        </Button>
        {isError && <Alert severity="error">{parseError(error)}</Alert>}
        <Typography variant="subtitle2">Dont have account?</Typography>
        <Button
          component={Link}
          to={Routes.signup}
          className="bg-warning-subtle"
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};
