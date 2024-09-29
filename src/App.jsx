
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { MantineProvider } from '@mantine/core';
import { useAccount } from './app/queries/account.mjs';
import theme from './theme';
import queryClient from './queryClient';
import RootDocument from './RootDocument';

/* Import styles */
import '@mantine/core/styles.css';
//import '@mantine/modals/style.css';
//import '@mantine/dates/style.css';
import './index.scss';

const App = ({ children }) => {
  //const { data, error, isError, isLoading, isFetching } = useAccount();

  //if (isLoading) {
  //  return null;
  //}

  return (
    <React.StrictMode>
      <RootDocument>
        <QueryClientProvider client={queryClient}>
          <MantineProvider theme={theme}>
            {children}
          </MantineProvider>
        </QueryClientProvider>
      </RootDocument>
    </React.StrictMode>
  );
};

export default App;
