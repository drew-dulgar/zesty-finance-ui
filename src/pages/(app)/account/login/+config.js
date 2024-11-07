import Login from '../../../../components/account/login/Login';

export default {
  title: 'Login',
  Page: Login,
  authorize: {
    authenticated: false,
    resource: 'auth',
    action: 'authenticate',
  }
};