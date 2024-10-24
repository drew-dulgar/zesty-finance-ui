import React from 'react';
import { useForm } from '@mantine/form';
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Center,
  Box,
  rem,
  Anchor
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

const ForgotPassword = () => {
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleForgotPassword = (values) => {
    console.log(values);
  };

  return (
    <Container size={460} my={40}>
      <Title align="center">
        Forgot Your Password?
      </Title>

      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleForgotPassword)}>
          <TextInput
            label="Email"
            placeholder="Your email"
            {...form.getInputProps('email')}
            withAsterisk
          />

          <Group justify="space-between" mt="lg">
            <Anchor href="/account/login" c="dimmed" size="sm">
              <Center inline>
                <IconArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>
            <Button type="submit">Reset password</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

export default ForgotPassword;
