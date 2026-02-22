import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { getContext } from './integrations/tanstack-query/root-provider';
import { routeTree } from './routeTree.gen';
import { Error404 } from './components/common/errors';

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,

    context: getContext(),

    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: Error404
  });

  return router;
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
