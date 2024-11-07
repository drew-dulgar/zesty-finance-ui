import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { Error401, Error403, Error404, Error500, Error503 } from '../../components/errors';

const Page = () => {
  const pageContext = usePageContext();
  const { abortReason, abortStatusCode, is404 } = pageContext;

  if (abortStatusCode === 401) {
    return <Error401 message={abortReason} />;
  } else if (abortStatusCode === 403) {
    return <Error403 message={abortReason} />;
  } else if (abortStatusCode === 404 || is404) {
    return <Error404 message={abortReason} />;
  } else if (abortStatusCode === 503) {
    return <Error503 message={abortReason} />;
  } else {
    return <Error500 message={abortReason} />;
  }
};

export { Page };