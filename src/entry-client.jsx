
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Entry from './Entry';
import Router from './Router';

import '@mantine/core/styles.css';
//import '@mantine/modals/style.css';
//import '@mantine/dates/style.css';
import './index.scss';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <Entry>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Entry>
);
