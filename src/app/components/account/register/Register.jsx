
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  Group,
  Checkbox,
  Text,
} from '@mantine/core';

const Register = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },

    validate: {
      name: (value) => (value ? null : 'Name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length >= 6 ? null : 'Password must be at least 6 characters',
      confirmPassword: (value, values) =>
        value === values.password ? null : 'Passwords do not match',
      terms: (value) => (value ? null : 'You must accept the terms and conditions'),
    },
  });

  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Box mx="auto" maxWidth={400}>
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
              I agree to the <a href="#">terms and conditions</a>
            </Text>
          }
          {...form.getInputProps('terms', { type: 'checkbox' })}
        />

        <Group position="center" mt="xl">
          <Button type="submit">Register</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Register;