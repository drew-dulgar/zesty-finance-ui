import React from 'react';
import { useForm } from '@mantine/form';
import {
  Checkbox,
  TextInput,
  PasswordInput,
  Button,
  Group,
  Container,
  Title,
  Text,
  Paper,
} from '@mantine/core';
import useLogin from '../../../hooks/account/useLogin.mjs';
import AnchorLink from '../../AnchorLink';

const Login = () => {
  const { login, isPending, isSuccess } = useLogin();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value ? null : 'Password is required'),
    },
  });

  const handleLogin = (values) => {
    login(values.email, values.password);
  };


  return (
    <Container size={420} my={40}>
      <Title align="center">
        Welcome back!
      </Title>

      <Text  c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <AnchorLink to="/account/register">Create Account</AnchorLink>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleLogin)}>
          <TextInput
            label="Email"
            {...form.getInputProps('email')}
            withAsterisk
          />

          <PasswordInput
            mt="md"
            label="Password"
            {...form.getInputProps('password')}
            withAsterisk
          />

          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" {...form.getInputProps('remember')} />
            <AnchorLink to="/account/forgot-password" size="sm">Forgot Password?</AnchorLink>
          </Group>

          <Button disabled={isSuccess} loading={isPending} type="submit" fullWidth mt="xl">Login</Button>
        </form>
      </Paper>
    </Container >
  );
}

export default Login;
