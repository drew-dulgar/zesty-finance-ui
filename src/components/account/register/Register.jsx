import React, { useState, useEffect } from 'react';
import { useForm } from '@mantine/form';
import {
  Title,
  Button,
  Container,
  Text,
  Paper,
  Anchor,
  Stepper,
} from '@mantine/core';
import RegisterVerificationCodeForm from './RegisterVerificationCodeForm';

const Register = () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

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


  return (
    <Container my={40}>
      <Title align="center">
        Sign Up!
      </Title>

      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already Have an Account?{" "}
        <Anchor href="/account/login">Sign in</Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
          <Stepper.Step label="Request Confirmation Code" description="Enter your email address to receive a confirmation code">
            <RegisterVerificationCodeForm form={form} />
          </Stepper.Step>
          <Stepper.Step label="Confirm Email Address" description="Enter the code sent to your email address">
          </Stepper.Step>
        </Stepper>
      </Paper>

    </Container>
  );
}

export default Register;