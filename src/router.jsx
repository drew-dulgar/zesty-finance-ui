import { createRouter as createTanstackRouter } from '@tanstack/react-router';
import { SuperJSON } from 'superjson'
import getQueryClient from './queryClient';
import { routeTree } from './routeTree.gen';

const createRouter = () => createTanstackRouter({
  routeTree,
  transformer: SuperJSON,
  context: {
    head: '',
    queryClient: getQueryClient(),
  },
});

export default createRouter;