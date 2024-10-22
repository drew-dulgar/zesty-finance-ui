import { useEffect } from 'react';
import { useAccount, useAccountLogout } from '../../queries';

const useLogout = () => {
  const account = useAccount({
    enabled: false
  });
  const accountLogout = useAccountLogout();

  const logout = () => {
    accountLogout.mutate();
  };

  useEffect(() => {
    if (accountLogout.isSuccess && accountLogout.data.success) {
      account.refetch();
    }
  }, [accountLogout.isSuccess]);

  return {
    logout,
    isSuccess: accountLogout.isSuccess && account.isSuccess && account?.data?.authenticated === false,
    isPending: accountLogout.isPending || account.isPending,
    isError:  accountLogout.isError || account.isError,
    error:  accountLogout.error || account.error
  };
};

export default useLogout;