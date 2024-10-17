import React from 'react';
import { Outlet } from '@tanstack/react-router';
import { 
  AppShell,
  Burger,
  Group,
  Skeleton
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAccount } from '../../queries/account.mjs';
import NavBarAccount from './NavBarAccount';

const Layout = ({ navbar = false }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const account = useAccount();
  const isMobileOpened = navbar & mobileOpened;
  const isDesktopOpened = navbar && desktopOpened;

  if (account.isLoading) {
    //return null;
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !isMobileOpened, desktop: !isDesktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" ml="2" mr="20" justify="space-between">
          <div>
          {navbar && (
            <React.Fragment>
              <Burger opened={isMobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
              <Burger opened={isDesktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
            </React.Fragment>
          )}
          {import.meta.env.APP_NAME}
          </div>
          <NavBarAccount authenticated={account.data.authenticated} />
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
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;