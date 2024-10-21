import React from 'react';
import { createRootRoute } from '@tanstack/react-router';
import mantineCssUrl from '@mantine/core/styles.css?url'
import DefaultLayout from '../app/layout/default/Default';
import Error404 from '../app/components/errors/Error404';
import RootDocument from '../RootDocument';
import App from '../App';

const scripts = {
  dev: [
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
  prod: [
    {
      type: 'module',
      src: '/assets/entry-client.js',
    }
  ]
}

const links = {
  dev: [
    {
      rel: 'stylesheet',
      href: mantineCssUrl
    }
  ],
  prod: [
    {
      rel: 'stylesheet',
      href: '/assets/styles.css',
    }
  ]
};

export const Route = createRootRoute({
  meta: () => [
    {
      title: import.meta.env.APP_NAME
    },
    {
      charSet: 'UTF-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
  scripts: () => {
    const useScripts = [];

    if (import.meta.env.PROD) {
      useScripts.push(...scripts.prod);
    } else {
      useScripts.push(...scripts.dev);
    }

    return useScripts;
  },
  links: () => {
    const useLinks = [
      {
        rel: 'shortcut icon',
        href: 'data:image/x-icon;',
        type: 'image/x-icon',
      },
    ];

    if (import.meta.env.PROD) {
      useLinks.push(...links.prod);
    } else {
      useLinks.push(...links.dev);
    }

    return useLinks;

  },
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


