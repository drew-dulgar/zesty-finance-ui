
import classes from './Error.module.css';

import React from 'react';
import { Container, Paper, Title, Text, Stack } from '@mantine/core';
import ButtonLink from '../../ButtonLink';

const Error = ({
  errorCode,
  errorTitle,
  title,
  buttonProps,
  children
}) => (
  <Container className={classes.root}>
    <div className={classes.errorTitleContainer}>
      <div className={classes.errorCode}>{errorCode}</div>
      <div className={classes.errorTitle}>{errorTitle}</div>
    </div>
    <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
      <Stack align="center" justify="center">
        <Title className={classes.title}>{title}</Title>
        <Text c="dimmed" ta="center" className={classes.description}>
          {children}
        </Text>
        <ButtonLink size="md" color="coral.6" {...buttonProps} />
      </Stack>
    </Paper>
  </Container>
);

export default Error;
