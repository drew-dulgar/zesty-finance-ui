import { createFileRoute } from '@tanstack/react-router';
import Login from '../../app/components/account/login/Login';

export const Route = createFileRoute('/account/login')({
  meta: () => [
    {
      title: `${import.meta.env.APP_NAME}: Login`
    },
  ],
  component: Login,
});
