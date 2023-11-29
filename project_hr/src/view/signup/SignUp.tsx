import { Form, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';

import { Routes } from 'routing/Routes';
import { parseError } from 'errors/parseError';
import { register as registerUser } from 'api/register/register';
import type { SignUpPayload } from 'api/register/register';
import { Header } from 'components/Header/Header';

import { schema } from './validation';

export const SignUp = () => {
  const navigate = useNavigate();
  const { mutate, isError, error } = useMutation(registerUser, {
    onSuccess: () => navigate(Routes.signin),
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First name: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name: "
            {...register('firstName')}
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last name: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name: "
            {...register('lastName')}
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            placeholder="Email: "
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
            placeholder="Password: "
            {...register('password')}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="repeatPassword">
          <Form.Label>Repeat password: </Form.Label>
          <Form.Control
            type="password"
            placeholder="Repeat password: "
            {...register('repeatPassword')}
            isInvalid={!!errors.repeatPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.repeatPassword?.message}
          </Form.Control.Feedback>
        </Form.Group>
        {isError && (
          <Form.Control.Feedback style={{ display: 'block' }} type="invalid">
            {parseError(error)}
          </Form.Control.Feedback>
        )}

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p>
          Already have an account? Then{' '}
          <Nav.Link as={Link} to={Routes.signin} className="bg-warning-subtle">
            Sign In
          </Nav.Link>
        </p>
      </Form>
    </>
  );
};
