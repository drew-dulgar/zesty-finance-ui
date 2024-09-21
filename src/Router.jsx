import { Routes, Route } from 'react-router-dom';
import Default from './app/layout/default/Default';
import Login from './app/account/auth/Login';
import Error404 from './app/components/errors/Error404';
import Error500 from './app/components/errors/Error500';
import Error403 from './app/components/errors/Error403';

const Home = () => (
  <div>Home!!!</div>
);


const Register = () => (
  <div>Register</div>
);

const UserDashboard = () => (
  <div>User Dashboard</div>
);

const TBD = () => (
  <div>TBD</div>
);



const Router = () => {

  return (
    <Routes>

      <Route path="/account">
        <Route index element={<TBD />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/" element={<Default />}>
        <Route index element={<Home />} />
        <Route path="user" element={<UserDashboard />} />
      </Route>

      <Route path="/error" element={<Error500 />} />
      <Route path="/access-denied" element={<Error403 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;