/* Import styles */
import '@mantine/core/styles.css';
//import '@mantine/modals/style.css';
//import '@mantine/dates/style.css';
//import './index.scss';


import React from 'react';
import { MantineProvider } from '@mantine/core';
import theme from './theme';

const App = ({ children }) => {

  return (
    <React.StrictMode>
      <MantineProvider theme={theme}>
        
          {children}
        
      </MantineProvider>
    </React.StrictMode>
  );
};

export default App;
