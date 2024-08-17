import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Router from './Router';
import App from './App'

export function render({ path }) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App>
        <StaticRouter location={path}>
          <Router />
        </StaticRouter>
      </App>
    </React.StrictMode>
  )
  return { html }
}
