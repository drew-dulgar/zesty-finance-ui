import React from 'react';
import { createLink, Link } from '@tanstack/react-router';
import { Anchor } from '@mantine/core';

const AnchorLink = createLink(
  React.forwardRef(
    (props, ref) => (
      <Anchor {...props} ref={ref} component={Link} />
    ),
  ),
);

export default AnchorLink;