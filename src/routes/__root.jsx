import React from 'react';
import { createRootRoute } from '@tanstack/react-router';
import mantineCssUrl from '@mantine/core/styles.css?url'
import DefaultLayout from '../app/layout/default/Default';
import Error404 from '../app/components/errors/Error404';
import RootDocument from '../RootDocument';
import App from '../App';


export const Route = createRootRoute({
  meta: () => [
    {
      title: 'Zesty Finance',
    },
    {
      charSet: 'UTF-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
  scripts: () => [
    {
      type: 'module',
      children: `import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true`,
    },
    {
      type: 'module',
      src: '/@vite/client',
    },
    {
      type: 'module',
      src: '/src/entry-client.jsx',
    },
  ],
  links: () => [
    { 
      rel: 'stylesheet', 
      href: mantineCssUrl 
    }
  ],
  component: () => {
    return (
      <RootDocument>
        <App>
          <DefaultLayout />
        </App>
      </RootDocument>
    );
  },
  notFoundComponent: Error404,
});


