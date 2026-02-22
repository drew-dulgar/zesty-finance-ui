import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import React from 'react';
import MantineProvider from '../integrations/mantine-ui/root-provider';
import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';
import TanStackQueryProvider from '../integrations/tanstack-query/root-provider';
import { Error404 } from '@/components/common/errors';

import appCss from '../styles.css?url';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Zesty Finance',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: Error404
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <MantineProvider>
        <html lang="en">
          <head>
            <HeadContent />
          </head>
          <body>
            <TanStackQueryProvider>
              {children}
              <TanStackDevtools
                config={{
                  position: 'bottom-right',
                }}
                plugins={[
                  {
                    name: 'Tanstack Router',
                    render: <TanStackRouterDevtoolsPanel />,
                  },
                  TanStackQueryDevtools,
                ]}
              />
            </TanStackQueryProvider>
            <Scripts />
          </body>
        </html>
      </MantineProvider>
    </React.StrictMode>
  );
}
