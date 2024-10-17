import BaseService from '../lib/BaseService.mjs';

class AccountService extends BaseService {
  get = () => super.GET('/');

  create = ({
    email,
    password,
    firstName,
    middleName,
    lastName
  } = {}) => super.POST('/create', {
    email,
    password,
    firstName,
    middleName,
    lastName
  });

  authorize = ({email, password} = {}) => super.POST('/auth', {
    email,
    password
  });

  logout = () => super.DELETE('/auth');
}

export default new AccountService('/account');
