import React from 'react';
import Error from './Error/Error';

const Error404 = () => (
  <Error
    errorCode="404"
    title="You have found a secret place"
    buttonProps={{
      to: '/',
      children: 'Take me back to home page'
    }}
  >
    Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
    been moved to another URL.
  </Error>
);

export default Error404;
