import React from 'react';
import Error from './Error/Error';

const Error500 = () => (
  <Error
    errorCode="500"
    errorTitle="Internal Server Error"
    title="Whoops! Something bad just happened..."
    buttonProps={{
      to: '',
      children: 'Refresh the page',
    }}
  >
    Our servers could not handle your request. Don't worry, our development team
    was already notified. Try refreshing the page.
  </Error>
);

export default Error500;
