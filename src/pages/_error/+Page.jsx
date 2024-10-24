import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { Error401, Error403, Error404, Error500 } from '../../components/errors';

const Page = () => {
  const pageContext = usePageContext();
  const { abortReason, abortStatusCode, is404 } = pageContext;

  if (typeof abortReason === 'string') {
    return abortReason;
  } else if (abortStatusCode === 401) {
    return <Error401 />
  } else if (abortStatusCode === 403) {
    return <Error403 />
  } else if (is404) {
    return <Error404 />
  } else {
    return <Error500 />;
  }
};

export { Page };