import Layout from "./layout/Layout";

const App = ({ children }) => (
  <div className="app">
    <Layout>
      {children}
    </Layout>
  </div>
);


export default App;
