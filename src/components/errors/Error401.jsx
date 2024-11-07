import React from 'react';
import Error from './Error/Error';

const Error401 = () => (
  <Error
    errorCode="401"
    errorTitle="Not Authorized"
    title="Who are you?"
    buttonProps={{
      to: '/account/login',
      children: 'Login'
    }}
  >
    Looks like you are trying to do something without us knowing who you are. That's ok! Sign in so that we can get this sorted!
  </Error>
);

export default Error401;