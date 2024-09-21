import React from 'react';
import Alone from '../../layout/alone/Alone';
import errorImage from '../../../assets/images/error/error.svg';

const Error500 = () => {

  const icon = (
    <div className="flex justify-content-center align-items-center bg-pink-500 border-circle" style={{ height: '3.2rem', width: '3.2rem' }}>
      <i className="pi pi-fw pi-exclamation-circle text-2xl text-white"></i>
    </div>
  );

  return (
    <Alone
      color="error"
      icon={icon}
      text="An Error Occured"
      subText="Whoops! Something went wrong."
    >

      <img src={errorImage} alt="Error" className="mb-5" width="80%" />

    </Alone>
  )
};

export default Error500;
