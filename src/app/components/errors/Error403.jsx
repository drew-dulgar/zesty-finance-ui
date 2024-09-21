import React from 'react';
import Alone from '../../layout/alone/Alone';
import accessImage from '../../../assets/images/error/access.svg';

const Error403 = () => {

  const icon = (
    <div className="flex justify-content-center align-items-center bg-yellow-500 border-circle" style={{ height: '3.2rem', width: '3.2rem' }}>
      <i className="pi pi-fw pi-exclamation-circle text-2xl text-white"></i>
    </div>
  );

  return (
    <Alone
      color="warning"
      icon={icon}
      text="Access Denied"
      subText="You do not have the necessary permisions."
    >

      <img src={accessImage} alt="Access Denied" className="mb-5" width="80%" />

    </Alone>
  )
};

export default Error403;
