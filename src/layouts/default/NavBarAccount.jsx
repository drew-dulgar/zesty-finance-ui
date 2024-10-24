import React, { useState, useEffect } from 'react';
import {
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  rem,
} from '@mantine/core';
import {
  IconLogout,
  IconSettings,
  IconChevronDown,
} from '@tabler/icons-react';
import ButtonLink from '../../components/ButtonLink';
import useLogout from '../../hooks/account/useLogout.mjs';

const ROUTE_LOGIN = '/account/login';
const ROUTE_REGISTER = '/account/register';

const NavBarAccount = ({
  account,
}) => {
  const { logout: handleLogout } = useLogout();
  const [accountMenuOpened, setAccountMenuOpened] = useState(false);
  
  const authenticated = account?.authenticated || false;

  if (authenticated) {
    const user = account?.user || {};

    return (
      <Menu
        width={260}
        position="bottom-end"
        transitionProps={{ transition: 'pop-top-right' }}
        onClose={() => setAccountMenuOpened(false)}
        onOpen={() => setAccountMenuOpened(true)}
        withinPortal
      >
        <Menu.Target>
          <UnstyledButton>
            <Group gap={7}>
              <Avatar src={null} alt="" size={50} />
              <Text fw={500} size="sm" lh={1} mr={3}>
                {user.id}
              </Text>
              <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Settings</Menu.Label>
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            }
          >
            Account settings
          </Menu.Item>
          <Menu.Item
            onClick={handleLogout}
            leftSection={
              <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            }
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  } else {
    return (
      <Group>
        <ButtonLink
          to={ROUTE_LOGIN}
          color="cerulean"
          variant="outline">
          Log in
        </ButtonLink>
        <ButtonLink
          to={ROUTE_REGISTER}
          color="cerulean"
          variant="filled">
          Sign up
        </ButtonLink>
      </Group>
    )
  }
}

export default NavBarAccount;