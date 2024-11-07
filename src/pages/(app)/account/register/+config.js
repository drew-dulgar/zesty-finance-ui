import Register from '../../../../components/account/register/Register';

export default {
  title: 'Register',
  Page: Register,
  authorize: {
    authenticated: false,
    resource: 'account',
    action: 'create',
  }
};