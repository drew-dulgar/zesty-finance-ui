import { createFileRoute } from '@tanstack/react-router';
import Register from '../../app/components/account/register/Register';

export const Route = createFileRoute('/account/register')({
  component: Register,
})
