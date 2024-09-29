import React from 'react';
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start';

const RootDocument = ({ children }) => (
  <Html>
    <Head>
      <Meta />
    </Head>
    <Body>
      {children}
      <Scripts />
    </Body>
  </Html>
);

export default RootDocument;