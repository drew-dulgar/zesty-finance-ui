
import React, { useState, useEffect } from 'react';
import useLogin from '../../../hooks/account/useLogin.mjs';

const Login = () => {
  const {login, isLoading} = useLogin();

  const [email, setEmail] = useState('drewbdulgar@gmail.com')
  const [password, setPassword] = useState('password');
  const [checked, setChecked] = useState(false);

  const handleLogin = () => {
    login(email, password);
  };


  return (
    <button disabled={isLoading} key="login" onClick={handleLogin}>Login</button>
  );
};

export default Login;