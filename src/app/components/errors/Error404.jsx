import React from 'react';
import Alone from '../../layout/alone/Alone';

const Error404 = () => {

  const icon = (
    <span className="text-blue-500 font-bold text-3xl">404</span>
  );

  return (
    <Alone
      color="info"
      icon={icon}
      text="Not Found"
      subText="Requested resource is not available"
    >

    </Alone>
  )
};

export default Error404;
