import React from 'react';

const Alone = ({
  color = 'primary',
  icon,
  text,
  subText,
  children
}) => (
  <div className="layout-alone surface-ground flex align-items-center justify-content-center">
    <div className="flex flex-column align-items-center justify-content-center">
      <div className="mb-5 flex-shrink-0" >ZF</div>
      <div className={`layout-alone-container border-${color}`}>
        <div className="layout-alone-border shadow-2 w-full surface-card py-5 px-5 sm:px-8 flex flex-column align-items-center">
          {icon}
          {text && (
            <h1 className="text-900 font-bold text-5xl mb-2">{text}</h1>
          )}
          {subText && (
            <span className="text-600 mb-5">{subText}</span>
          )}
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default Alone;
