import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createMemoryHistory } from '@tanstack/react-router';
import { StartServer } from '@tanstack/start/server';
import createRouter from './router';

export const render = async (url) => {
  const router = createRouter();

  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  });

  router.update({
    history: memoryHistory,
  });

  await router.load();

  const html = ReactDOMServer.renderToString(<StartServer router={router} />);

  return {
    html,
    router,
  };
}
