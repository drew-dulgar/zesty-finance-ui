import React from 'react';
import Error from './Error/Error';

const Error403 = () => (
  <Error
    errorCode="403"
    errorTitle="Forbidden"
    title="Why are you doing that?"
    buttonProps={{
      to: '/',
      children: 'Take me back to home page',
    }}
  >
    Looks like you are trying to do something your not allowed to do. Bummer.
  </Error>
);

export default Error403;
