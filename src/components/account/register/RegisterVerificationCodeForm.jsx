import React from 'react';
import { useEffect } from 'react';
import {
  TextInput,
  Button,
} from '@mantine/core';
import { useAccountEmailVerificationCode } from '../../../queries/account.mjs';

const RegisterVerificationCodeForm = ({ form }) => {
  const accountEmailVerificationCode = useAccountEmailVerificationCode();

  const validationErrors = accountEmailVerificationCode?.data?.validationErrors || {};
  const hasValidationErrors = Object.keys(validationErrors).length > 0;

  useEffect(() => {
    if (validationErrors) {

      form.setErrors(validationErrors);
    }
  }, [hasValidationErrors]);

  const handleSubmit = (values) => {
    accountEmailVerificationCode.mutate(values);
  };

  return (

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mt="md"
            label="Email"
            placeholder="Your email"
            {...form.getInputProps('email')}
            withAsterisk
          />


          <Button type="submit" fullWidth mt="xl" disabled={false}>Register Account</Button>
        </form>
  );
}

export default RegisterVerificationCodeForm;