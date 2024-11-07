import React from 'react';
import {
  AppShell,
  Burger,
  Group,
  Skeleton,
} from '@mantine/core';

import Authorizer from '../../components/Authorizer';
import { useAccount } from '../../queries';
import { useNavbarStore } from '../../store/index.mjs';
import NavBarAccount from './NavBarAccount';

const Layout = ({ navbar = true, children }) => {
  const account = useAccount();
  const { open: navbarOpen, toggleNavbar } = useNavbarStore();
  const isNavbarOpen = navbar && navbarOpen;
  const accountData = account?.data || {};

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !isNavbarOpen, desktop: !isNavbarOpen },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" ml="2" mr="20" justify="space-between">
          <div>
            {navbar && (
              <React.Fragment>
                <Burger opened={isNavbarOpen} onClick={toggleNavbar} size="sm" />
              </React.Fragment>
            )}
            {import.meta.env.APP_NAME}
          </div>
          <NavBarAccount account={accountData} />
        </Group>
      </AppShell.Header>
      {navbar && (
        <AppShell.Navbar p="md">
          Navbar
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Navbar>
      )}
      <AppShell.Main>
        <Authorizer account={account}>
          {children}
        </Authorizer>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;