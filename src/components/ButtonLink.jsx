import React from 'react';
import { Button } from '@mantine/core';
import { navigate } from 'vike/client/router';
import { usePageContext } from 'vike-react/usePageContext';

const ButtonLink = ({
  to,
  disabled = false,
  disabledWhenActive = false,
  ...props
}) => {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;

  const isActive = to === '/' ? urlPathname === to : urlPathname.startsWith(to);
  const isDisabled = disabled || (disabledWhenActive && isActive);

  const handleOnClick = async () => {
    await navigate(to);
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
