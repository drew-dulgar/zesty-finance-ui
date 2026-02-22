import React from 'react';
import { Button } from '@mantine/core';

const ButtonLink = ({
  to,
  disabled = false,
  disabledWhenActive = false,
  ...props
}) => {
  const urlPathname = '/';
  const isActive = to === '/' ? urlPathname === to : urlPathname.startsWith(to);
  const isDisabled = disabled || (disabledWhenActive && isActive);

  const handleOnClick = async () => {
    alert("click")
  };

  return (
    <Button
      disabled={isDisabled}
      onClick={handleOnClick}
      {...props}
      />
    );
};

export default ButtonLink;
