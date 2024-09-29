import { createRouter } from '@tanstack/react-router';
import queryClient from './queryClient';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  context: {
    head: '',
    queryClient,
  },
});

export default router;