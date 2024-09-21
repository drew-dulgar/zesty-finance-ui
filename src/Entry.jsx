import React from 'react';
import { MantineProvider } from '@mantine/core';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import App from './App';

const queryClient = new QueryClient();

const Entry = ({ children }) => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <App>
          {children}
        </App>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default Entry;

