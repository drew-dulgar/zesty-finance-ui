/* Import styles */
import '@mantine/core/styles.css';
//import '@mantine/modals/style.css';
//import '@mantine/dates/style.css';
//import './index.scss';


import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ErrorBoundary } from 'react-error-boundary';
import theme from './theme';

const App = ({ children }) => (
  <ErrorBoundary>
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  </ErrorBoundary>
);

export default App;
