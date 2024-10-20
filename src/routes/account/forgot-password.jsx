import { createFileRoute } from '@tanstack/react-router'
import ForgotPassword from '../../app/components/account/forgotPassword/ForgotPassword';

export const Route = createFileRoute('/account/forgot-password')({
  component: ForgotPassword,
})
