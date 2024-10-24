
import { useForm } from '@mantine/form';
import {
  Title,
  TextInput,
  PasswordInput,
  Button,
  Container,
  Group,
  Checkbox,
  Text,
  Paper,
  Anchor
} from '@mantine/core';

const Register = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      tos: false,
    },

    validate: {
      name: (value) => (value ? null : 'Name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length >= 6 ? null : 'Password must be at least 6 characters',
      confirmPassword: (value, values) =>
        value === values.password ? null : 'Passwords do not match',
      tos: (value) => (value ? null : 'You must accept the terms and conditions'),
    },
  });

  const handleSubmit = (values) => {
    console.log('Form values:', values);
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
            label="Name"
            placeholder="Your name"
            {...form.getInputProps('name')}
            withAsterisk
          />

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
            {...form.getInputProps('confirmPassword')}
            withAsterisk
          />

          <Checkbox
            mt="md"
            label={
              <Text size="sm">
                I agree to the <Anchor>terms and conditions</Anchor>.
              </Text>
            }
            {...form.getInputProps('terms', { type: 'checkbox' })}
          />

          <Button type="submit" fullWidth mt="xl">Register Account</Button>
        </form>
      </Paper>

    </Container>
  );
}

export default Register;