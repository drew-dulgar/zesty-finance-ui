import React from 'react';
import Error from './Error/Error';

const Error503 = () => (
  <Error
    errorCode="503"
    errorTitle="Server Unavailable"
    title="Whoops! Something bad just happened..."
    buttonProps={{
      to: '',
      children: 'Refresh the page'
    }}
  >
    We cannot handle your request right now, please wait for a couple of minutes and refresh the page. Our team is already working on this issue.
  </Error>
);

export default Error503;
