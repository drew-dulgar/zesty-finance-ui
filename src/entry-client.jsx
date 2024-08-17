
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Router from './Router';
import App from './App'

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './styles/index.scss';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <PrimeReactProvider>
      <App>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </App>
    </PrimeReactProvider>
  </React.StrictMode>
)
