import { Routes, Route } from 'react-router-dom';

const Home = () => (
  <div>Home!!!</div>
);

const Login = () => (
  <div>Login!!!</div>
);

const NotFound = () => (
  <div>404 not found!</div>
);

const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/user/auth/login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;