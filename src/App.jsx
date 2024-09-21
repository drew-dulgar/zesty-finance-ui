
import React from 'react';
import { useAccount } from './app/queries/account.mjs';

const App = ({ children }) => {
  const { data, error, isError, isLoading, isFetching } = useAccount();

  console.log('render', isFetching);
  if (isLoading) {
    return null;
  }

  return (
    <div className="app">

      {children}

    </div>
  )
};


export default React.memo(App);
