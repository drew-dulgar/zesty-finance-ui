import BaseService from './BaseService.mjs';

class AccountService extends BaseService {
  get = () => {
    return super.GET('/');
  }

  create = (body = {}) => super.POST('/', body);

  authenticate = ({email, password} = {}) => super.POST('/auth', {
    email,
    password
  });

  emailVerificationCode = (email) => super.POST('/account/verification-code', {
    email
  });

  logout = () => super.DELETE('/auth');
}

export default new AccountService('/account');
