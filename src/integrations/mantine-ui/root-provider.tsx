import { MantineProvider as MantineProviderCore } from '@mantine/core';
import type { ReactNode } from 'react';
import theme from './theme';

import '@mantine/core/styles.css';

export default function MantimeProvider({ children }: { children: ReactNode }) {
  return <MantineProviderCore theme={theme}>{children}</MantineProviderCore>;
}
