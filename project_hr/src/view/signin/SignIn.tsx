import { Button, Form, Nav, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';

import { Routes } from 'routing/Routes';
import { tokenStorage } from 'class/tokenStorageClass';
import { parseError } from 'errors/parseError';
import type { Tokens } from 'axios/axios.types';

import { axios } from '../../axios/axios';

import { schema } from './validate';
import type { SignInPayload, SignInResponse } from './SignIn.types';

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

  const { mutate, isLoading, isError, error } = useMutation(
    (payload: SignInPayload) => {
      return axios.post<Tokens>('auth/login', payload);
    },
    {
      onSuccess: ({ data }: SignInResponse) => {
        tokenStorage.saveAccessToken(data.accessToken, isRememberMe);
        tokenStorage.saveRefreshToken(data.refreshToken, isRememberMe);
        navigate(Routes.dashboard);
      },
    },
  );

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  const onSubmit = async (payload: SignInPayload) => mutate(payload);

  return (
    <>
      <Helmet>
        <title>SingIn</title>
      </Helmet>
      <h1>SIGN IN</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email:"
            {...register('email')}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password:"
            {...register('password')}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="rememberMe">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            {...register('rememberMe')}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {' '}
          Sign In
        </Button>
        {isError && (
          <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
            {parseError(error)}
          </Form.Control.Feedback>
        )}

        <p>
          Dont have account?
          <Nav.Link as={Link} to={Routes.signup} className="bg-warning-subtle">
            Sign Up
          </Nav.Link>
        </p>
      </Form>
    </>
  );
};
