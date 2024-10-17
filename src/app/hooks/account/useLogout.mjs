import { useEffect } from 'react';
import { useAccount, useAccountLogout } from '../../queries';


const useLogout = () => {
  const account = useAccount();
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
    isLoading: account.isLoading || accountLogout.isLoading
  };
};

export default useLogout;