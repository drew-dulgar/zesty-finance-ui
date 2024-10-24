import App from '../App';
import DefaultLayout from '../layouts/default/Default';

const Layout = ({children}) => (
  <App>
    <DefaultLayout>
    {children}
    </DefaultLayout>
  </App>
);

export { Layout };