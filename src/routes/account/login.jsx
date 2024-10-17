import { createFileRoute } from '@tanstack/react-router';
import Login from '../../app/components/account/login/Login';

export const Route = createFileRoute('/account/login')({
  component: Login,
});
