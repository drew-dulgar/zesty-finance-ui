import BaseService from '../lib/BaseService.mjs';

class AccountService extends BaseService {
  get = () => {
    return super.GET('/');
  }

  create = (body = {}) => super.POST('/', body);

  authenticate = ({email, password} = {}) => super.POST('/auth', {
    email,
    password
  });

  logout = () => super.DELETE('/auth');
}

export default new AccountService('/account');
