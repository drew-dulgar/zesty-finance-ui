
import DefaultLayout from '../../../layouts/default/Default';

const Layout = ({ children }) => (
  <DefaultLayout navbar={false}>
    {children}
  </DefaultLayout>
);

export default Layout;