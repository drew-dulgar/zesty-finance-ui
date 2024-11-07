import React from 'react';
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import {
  Title,
  TextInput,
  PasswordInput,
  Button,
  Container,
  Checkbox,
  Text,
  Paper,
  Anchor
} from '@mantine/core';
import { useAccountCreate } from '../../../queries/account.mjs';

const Register = () => {
  const accountCreate = useAccountCreate();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      tos: false,
    },
  });

  const validationErrors = accountCreate?.data?.validationErrors || {};
  const hasValidationErrors = Object.keys(validationErrors).length > 0;

  useEffect(() => {
    if (validationErrors) {

      form.setErrors(validationErrors);
    }
  }, [hasValidationErrors]);

  const handleSubmit = (values) => {
    accountCreate.mutate(values);
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">
        Sign Up!
      </Title>

      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already Have an Account?{" "}
        <Anchor href="/account/login">Sign in</Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mt="md"
            label="Email"
            placeholder="Your email"
            {...form.getInputProps('email')}
            withAsterisk
          />

          <PasswordInput
            mt="md"
            label="Password"
            placeholder="Your password"
            {...form.getInputProps('password')}
            withAsterisk
          />

          <PasswordInput
            mt="md"
            label="Confirm Password"
            placeholder="Confirm your password"
            {...form.getInputProps('passwordConfirm')}
            withAsterisk
          />

          <Checkbox
            mt="md"
            label={
              <Text size="sm">
                I agree to the <Anchor>terms and conditions</Anchor>.
              </Text>
            }
            {...form.getInputProps('tos', { type: 'checkbox' })}
          />

          <Button type="submit" fullWidth mt="xl" disabled={false}>Register Account</Button>
        </form>
      </Paper>

    </Container>
  );
}

export default Register;