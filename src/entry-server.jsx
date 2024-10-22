import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createMemoryHistory } from '@tanstack/react-router';
import { StartServer } from '@tanstack/start/server';
import createRouter from './router';
import {useCredentialStore} from './app/store';

export const render = async (url, ssrManifest, cookies) => {
  // make the cookie vars globally available
  useCredentialStore.getState().setCookies(cookies);

  const router = createRouter();

  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  });

  router.update({
    history: memoryHistory,
  });

  await router.load();

  const html = ReactDOMServer.renderToString(
    <StartServer router={router} />
  );

  return {
    html,
    router,
  };
}
