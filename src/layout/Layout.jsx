import React from 'react';
import AppMenuBar from './AppMenuBar';

const Layout = ({ children })=> {

  return (
    <div className="layout">
      <AppMenuBar />
      <div className="main flex mt-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;