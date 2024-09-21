import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ColorSchemeScript } from '@mantine/core';
import Router from './Router';
import Entry from './Entry';

const render = (path) => {
  const html = ReactDOMServer.renderToString(
    <Entry>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </Entry>
  );

  const head = ReactDOMServer.renderToString(
    <ColorSchemeScript />
  );
  return { html, head };
}

export { render };
