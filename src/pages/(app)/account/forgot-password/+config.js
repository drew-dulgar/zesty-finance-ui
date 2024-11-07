import ForgotPassword from '../../../../components/account/forgotPassword/ForgotPassword';

export default {
  title: 'Forgot Password',
  Page: ForgotPassword,
  authorize: {
    authenticated: false,
    resource: 'account',
    action: 'recover-password',
  }
};