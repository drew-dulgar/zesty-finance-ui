import React from 'react';
import { createLink, Link } from '@tanstack/react-router';
import { Button } from '@mantine/core';

const ButtonLink = createLink(
  React.forwardRef(
    (props, ref) => (
      <Button {...props} ref={ref} component={Link} />
    ),
  ),
);

export default ButtonLink;