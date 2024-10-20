/* Import styles */
import '@mantine/core/styles.css';
//import '@mantine/modals/style.css';
//import '@mantine/dates/style.css';
//import './index.scss';


import React from 'react';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { MantineProvider } from '@mantine/core';
import QueryClientProvider from './QueryClientProvider';
import theme from './theme';
import { RouterProvider } from '@tanstack/react-router';

import createRouter from './router';

const App = ({ children }) => {
  const router = createRouter();

  return (
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <QueryClientProvider>
            {children}
        </QueryClientProvider>
      </MantineProvider>
    </React.StrictMode>
  );
};

export default App;
