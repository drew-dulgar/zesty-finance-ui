
import React, { useState } from 'react';

import Alone from '../../layout/alone/Alone';
import AccountService from '../../services/AccountService.mjs';

const Login = () => {
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = async () => {
    await AccountService.authorize(
      'drewbdulgar@gmail.com',
      'password',
    );

    await AccountService.get();
  };

  const handleLogout = async () => {
    await AccountService.logout();
  };

  return (
    <Alone
      icon={'avatar'}
      text="Welcome Back!"
      subText="Sign in to continue"
    >
     <button onClick={handleSubmit}>Login</button>
     <button onClick={handleLogout}>Logout</button>
    </Alone>

  );
};

export default Login;