/* Import styles */
import '@mantine/core/styles.css';
//import '@mantine/modals/style.css';
//import '@mantine/dates/style.css';
//import './index.scss';


import React from 'react';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import getQueryClient from './queryClient.mjs';
import theme from './theme';

const App = ({ children }) => {
  const queryClient = getQueryClient();

  return (
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </MantineProvider>
    </React.StrictMode>
  );
};

export default App;
