import React from 'react';
import { Html, Head, Meta, Scripts, Body, } from '@tanstack/start';

const RootDocument = ({ children }) => (
  <Html lang="en">
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