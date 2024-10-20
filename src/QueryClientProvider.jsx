import {
  QueryClientProvider as TanstackQueryClientProvider,
  HydrationBoundary,
  dehydrate
} from '@tanstack/react-query';
import getQueryClient from './queryClient.mjs';

const QueryClientProvider = ({ children }) => {  
  const queryClient = getQueryClient();
  const dehydratedQueryClient = dehydrate(queryClient);

  return (
    <TanstackQueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedQueryClient}>
        {children}
      </HydrationBoundary>
    </TanstackQueryClientProvider>
  );
};

export default QueryClientProvider;
