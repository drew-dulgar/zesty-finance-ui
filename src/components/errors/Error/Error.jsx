
import classes from './Error.module.css';

import React from 'react';
import { Container, Paper, Title, Text, Group } from '@mantine/core';
import ButtonLink from '../../ButtonLink';

const Error = ({
  errorCode,
  title,
  buttonProps,
  children
}) => (
  <Container className={classes.root}>
    <div className={classes.label}>{errorCode}</div>
    <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
      <Title className={classes.title}>{title}</Title>

      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        {children}
      </Text>
      <Group justify="center">
        <ButtonLink size="md" color="coral.7" {...buttonProps} />
      </Group>
    </Paper>
  </Container>
);

export default Error;
