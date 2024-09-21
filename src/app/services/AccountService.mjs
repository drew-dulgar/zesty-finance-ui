import BaseService from '../lib/BaseService.mjs';

class AccountService extends BaseService {
 get() {
    return super.GET('/');
  }

  create({
    email,
    password,
    firstName,
    middleName,
    lastName
  } = {}) {
    return super.POST('/create', {
      email,
      password,
      firstName,
      middleName,
      lastName
    });
  }

  authorize(email, password) {
    return super.POST('/auth', {
      email,
      password
    });
  }

  logout() {
    return super.DELETE('/auth');
  }
}

export default new AccountService('/account');
