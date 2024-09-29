
import React from 'react';
import ReactDOM from 'react-dom/client';
import { StartClient } from '@tanstack/start';
import router from './router';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <StartClient router={router} />
);