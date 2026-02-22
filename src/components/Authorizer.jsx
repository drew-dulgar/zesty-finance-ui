import React from 'react';
import { Error401, Error403, Error500 } from './common/errors';

const Authorizer = ({ account, children }) => {
  const accountData = account?.data || {};

  if (account.isError) {
    return <Error500 />
  }

  /*
  // page config
  const pageConfigAuthorize = pageContext?.config?.authorize;

  // authorize is set
  if (typeof pageConfigAuthorize === 'undefined') {
    throw new Error('Incorrect configuration: page authorize config not set');
  } else {
    // pageConfigAuthoirze must be declared on every single page. To disable it, set it to an empty object
    if (Object.keys(pageConfigAuthorize).length === 0) {
      return children;
    }

    const { authenticated, action, resource } = (pageConfigAuthorize || {});
    */
    const accountAuthenticated = accountData?.authenticated || false;
    const accountAuthorized = accountData?.authorized || {};

    const action = ''; // TODO fix
    const resource = ''; // TODO fix
    if ((action && !resource) || (resource && !action)) {
      throw new Error('Incorrect configuration: page action and resource config requires both to be set');
    }

    const authorized = (
      (typeof authenticated === 'undefined' ? true : authenticated === accountAuthenticated)
      && (typeof action === 'undefined' && typeof resource === 'undefined' ? true : accountAuthorized?.[resource]?.includes(action))
    );

    if (authorized) {
      return children;
    }

    if (accountAuthenticated) {
      return <Error403 />
    }

    return <Error401 />
  //}
};

export default Authorizer;